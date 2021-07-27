import React, { useState, useEffect } from "react";
import { Typography, makeStyles, Grid } from "@material-ui/core/";
import { fetchEpisodesAnimeData } from "../../../api/AnimeAPI";
import { CardEpisode } from "./CardEpisode";
import { Loading } from "../../Loading/Loading";

const useStyles = makeStyles((theme) => ({
  rootTabEpisodes: {
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

export const EpisodesAnime = ({ animeId }) => {
  const classes = useStyles();
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    async function fetchEpisodes() {
      const data = await fetchEpisodesAnimeData(animeId);
      setEpisodes(data);
    }
    fetchEpisodes();
  }, [animeId]);
  return (
    <div className={classes.rootTabEpisodes}>
      <Typography gutterBottom variant="h4" color="initial" align="center">
        Episodios
      </Typography>
      <Grid container direction="row" alignItems="center" spacing={2}>
        {episodes ? (
          episodes.data.map((episode, i) => {
            return (
              <Grid xs={12} sm={6} md={4} lg={3} item key={i}>
                <CardEpisode episodeData={episode} />
              </Grid>
            );
          })
        ) : (
          <Loading />
        )}
      </Grid>
      {console.log(episodes)}
    </div>
  );
};
