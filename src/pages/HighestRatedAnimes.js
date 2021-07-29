import React, { useState, useEffect, useCallback } from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import useNearScreen from "../hooks/useNearScreen";
import { fetchHighestAnimes, fetchUrl } from "../api/AnimeAPI";
import debounce from "just-debounce-it";
import { Loading } from "../components/Loading/Loading";
import { PosterAnime } from "../components/PosterAnime/PosterAnime";

const useStyles = makeStyles((theme) => ({
  rootHighestRatedAnimes: {
    [theme.breakpoints.up("lg")]: {
      margin: theme.spacing(3, 18),
    },
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(3, 10),
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(3, 2),
    },
  },
}));

export const HighestRatedAnimes = () => {
  let link;
  const classes = useStyles();
  const [animes, setAnimes] = useState(false);
  const { isNearScreen, fromRef } = useNearScreen({
    distance: "400px",
    once: false,
  });
  async function fetchNextAnimes(firstFetch = true) {
    if (firstFetch) {
      const result = await fetchHighestAnimes(20);
      setAnimes(result.data);
      link = result.links.next;
    } else {
      if (link) {
        const result = await fetchUrl(link);
        setAnimes((animes) => animes.concat(result.data));
        if (result.links.next) {
          link = result.links.next;
        } else {
          link = false;
        }
      }
    }
  }
  useEffect(() => {
    fetchNextAnimes();
    // eslint-disable-next-line
  }, []);
  // eslint-disable-next-line
  const debounceHandleNextAnimes = useCallback(
    debounce(() => fetchNextAnimes(false), 500),
    []
  );

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextAnimes();
    },
    [isNearScreen, debounceHandleNextAnimes]
  );
  return (
    <div className={classes.rootHighestRatedAnimes}>
      <Typography variant="h4" color="textPrimary">
        Animes mejor evaluados
      </Typography>
      <Grid container direction="row" alignItems="center" spacing={2}>
        {animes ? (
          animes.map((anime, i) => {
            if (animes.length - 1 === i) {
              return (
                <Grid item xs={6} sm={3} md={3} lg={2} key={i} zeroMinWidth>
                  <PosterAnime anime={anime} />
                  <div ref={fromRef}></div>
                </Grid>
              );
            }
            return (
              <Grid item xs={6} sm={3} md={3} lg={2} key={i} zeroMinWidth>
                <PosterAnime anime={anime} />
              </Grid>
            );
          })
        ) : (
          <Loading />
        )}
      </Grid>
    </div>
  );
};
