import React, { useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { CardResult } from "./CardResult";
import { fetchSearchAnime } from "../../api/AnimeAPI";
import { Loading } from "../Loading/Loading";

const useStyles = makeStyles((theme) => ({
  results: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down("sm")]: {
      width: 204,
      left: -24,
    },
    [theme.breakpoints.up("sm")]: {
      width: 300,
      left: -24,
    },
    zIndex: 1,
    marginTop: 12,
    maxHeight: 350,
    overflowY: "scroll",
    overflowX: "hidden",
  },
  title: {
    margin: theme.spacing(1, 1, 0, 1),
  },
}));
export const ResultsBox = ({ handleClickAway, keyword }) => {
  const classes = useStyles();
  const [animesSearch, setAnimesSearch] = useState(false);
  useEffect(() => {
    let unmounted = false;
    async function fetchSearch() {
      const result = await fetchSearchAnime(keyword);
      if (!unmounted) {
        setAnimesSearch(result);
      }
    }
    fetchSearch();
    return () => {
      unmounted = true;
    };
  }, [keyword]);
  return (
    <div className={classes.results}>
      <Typography
        variant="subtitle2"
        color="textSecondary"
        className={classes.title}
      >
        Resultados
      </Typography>
      <div>
        {animesSearch ? (
          animesSearch.data.length > 0 ? (
            animesSearch.data.map((animeResult, i) => {
              return (
                <CardResult
                  handleClickAway={handleClickAway}
                  key={i}
                  animeData={animeResult}
                />
              );
            })
          ) : (
            <>
              <Typography
                variant="body1"
                color="textPrimary"
                className={classes.title}
              >
                {`No se encontró nada por ${keyword}`}
              </Typography>
            </>
          )
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
