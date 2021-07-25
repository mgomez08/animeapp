import React, { useState, useEffect } from "react";
import { Carousel } from "../components/Carousel/Carousel";
import { Typography, makeStyles } from "@material-ui/core/";
import { HighestAnimes } from "../components/HighestAnimes/HighestAnimes";
import { PopularAnimes } from "../components/PopularAnimes/PopularAnimes";
import {
  fetchAnimeTreding,
  fetchHighestAnimes,
  fetchPopularAnimes,
} from "../api/AnimeAPI";
import { transformAnimeDataBasic } from "../utils/transformDataAnime";
import { Loading } from "../components/Loading/Loading";

const useStyles = makeStyles((theme) => ({
  highestAnimes: {
    padding: theme.spacing(0, 5),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 2),
    },
    backgroundColor: theme.palette.background.paper,
  },
  popularAnimes: {
    padding: theme.spacing(0, 5),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 2),
    },
  },
  title: {
    padding: theme.spacing(0, 5),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 2),
    },
    marginBottom: theme.spacing(2),
  },
  titleAnimes: {
    marginBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
}));
export const Home = () => {
  const [animesTreding, setAnimesTreding] = useState();
  const [highestAnimes, setHighestAnimes] = useState();
  const [popularAnimes, setPopularAnimes] = useState();
  useEffect(() => {
    async function fetchDataAnimes() {
      setAnimesTreding(transformAnimeDataBasic(await fetchAnimeTreding(5)));
      setHighestAnimes(transformAnimeDataBasic(await fetchHighestAnimes(5)));
      setPopularAnimes(transformAnimeDataBasic(await fetchPopularAnimes(5)));
    }
    fetchDataAnimes();
  }, []);
  const classes = useStyles();
  return (
    <>
      <div className="trending-animes">
        <Typography variant="h4" color="textPrimary" className={classes.title}>
          Trending Animes This Week
        </Typography>
        {animesTreding ? (
          <Carousel animesTreding={animesTreding} />
        ) : (
          <Loading />
        )}
      </div>
      <div className={classes.highestAnimes}>
        <Typography
          variant="h5"
          color="textSecondary"
          className={classes.titleAnimes}
        >
          Highest Rated Anime
        </Typography>
        {highestAnimes ? (
          <HighestAnimes highestAnimes={highestAnimes} />
        ) : (
          <Loading />
        )}
      </div>
      <div className={classes.popularAnimes}>
        <Typography
          variant="h5"
          color="textSecondary"
          className={classes.titleAnimes}
        >
          Most Popular Animes
        </Typography>
        {popularAnimes ? (
          <PopularAnimes popularAnimes={popularAnimes} />
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};
