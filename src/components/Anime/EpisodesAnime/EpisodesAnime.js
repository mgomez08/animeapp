import React, { useEffect, useCallback } from "react";
import { Typography, makeStyles, Grid } from "@material-ui/core/";
import { fetchEpisodesAnimeData, fetchUrl } from "../../../api/AnimeAPI";
import { CardEpisode } from "./CardEpisode";
import { Loading } from "../../Loading/Loading";
import useNearScreen from "../../../hooks/useNearScreen";
import debounce from "just-debounce-it";

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

export const EpisodesAnime = ({ animeData, episodes, setEpisodes }) => {
  let link;
  const classes = useStyles();
  const { isNearScreen, fromRef } = useNearScreen({
    distance: "400px",
    once: false,
  });
  async function fetchNextEpisodes(firstFetch = true) {
    if (firstFetch) {
      const result = await fetchEpisodesAnimeData(animeData.id);
      setEpisodes(result.data);
      link = result.links.next;
    } else {
      if (link) {
        const result = await fetchUrl(link);
        setEpisodes((episodes) => episodes.concat(result.data));
        if (result.links.next) {
          link = result.links.next;
        } else {
          link = false;
        }
      }
    }
  }
  useEffect(() => {
    fetchNextEpisodes();
    // eslint-disable-next-line
  }, []);
  // eslint-disable-next-line
  const debounceHandleNextEpisodes = useCallback(
    debounce(() => fetchNextEpisodes(false), 500),
    []
  );

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextEpisodes();
    },
    [isNearScreen, debounceHandleNextEpisodes]
  );

  return (
    <div className={classes.rootTabEpisodes}>
      <Typography gutterBottom variant="h4" color="initial" align="center">
        Episodios
      </Typography>
      <Grid
        className={classes.hola}
        container
        direction="row"
        alignItems="center"
        spacing={2}
      >
        {episodes ? (
          episodes.map((episode, i) => {
            if (episodes.length - 1 === i) {
              return (
                <Grid xs={12} sm={6} md={4} lg={3} item key={i}>
                  <CardEpisode
                    episodeData={episode}
                    animeData={animeData.attributes}
                  />
                  <div ref={fromRef}></div>
                </Grid>
              );
            }
            return (
              <Grid xs={12} sm={6} md={4} lg={3} item key={i}>
                <CardEpisode
                  episodeData={episode}
                  animeData={animeData.attributes}
                />
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
