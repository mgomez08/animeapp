import React, { useEffect, useRef, useCallback, useState } from "react";
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
  const [nextLink, setNextLink] = useState();
  const classes = useStyles();
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: episodes ? null : externalRef,
    once: false,
  });
  console.log(isNearScreen);
  useEffect(() => {
    async function fetchEpisodes() {
      if (!episodes) {
        const { data, links } = await fetchEpisodesAnimeData(animeData.id);
        setEpisodes(data);
        setNextLink(links.next);
      }
    }
    fetchEpisodes();
    // eslint-disable-next-line
  }, []);
  // async function fetchNextEpisodes() {
  //   const { data, links } = await fetchUrl(
  //     "https://kitsu.io/api/edge/episodes?filter%5BmediaType%5D=Anime&filter%5Bmedia_id%5D=12&page%5Blimit%5D=10&page%5Boffset%5D=10&sort=number"
  //   );
  //   console.log(episodes);
  //   console.log(data);
  //   setEpisodes(...episodes, data);
  //   setNextLink(links.next);
  // }
  // const debounceHandleNextEpisodes = useCallback(
  //   debounce(() => console.log("next episodes"), 500),
  //   []
  // );

  // useEffect(
  //   function () {
  //     console.log(isNearScreen);
  //     if (isNearScreen) debounceHandleNextEpisodes();
  //   },
  //   [isNearScreen]
  // );

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
                  <div ref={externalRef}>hola</div>
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
      {console.log(episodes)}
    </div>
  );
};
