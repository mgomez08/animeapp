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
import { Loading } from "../components/Loading/Loading";
import { Helmet } from "react-helmet";

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
      setAnimesTreding((await fetchAnimeTreding(5)).data);
      setHighestAnimes((await fetchHighestAnimes(5)).data);
      setPopularAnimes((await fetchPopularAnimes(5)).data);
    }
    fetchDataAnimes();
  }, []);
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Anime App</title>
        <meta name="description" content="Animes tendencia esta semana"></meta>
        <meta name="description" content="Animes más populares"></meta>
        <meta name="description" content="Animes mejor puntuados"></meta>
        <meta
          name="keywords"
          content="anime, noticias de anime, mejores animes"
        ></meta>
      </Helmet>
      <div className="trending-animes">
        <Typography variant="h4" color="textPrimary" className={classes.title}>
          Animes tendencia esta semana
        </Typography>
        {animesTreding ? (
          <Carousel animesTreding={animesTreding} />
        ) : (
          <>
            <Helmet>
              <title>Cargando...</title>
            </Helmet>
            <Loading />
          </>
        )}
      </div>
      <div className={classes.highestAnimes}>
        <Typography
          variant="h5"
          color="textSecondary"
          className={classes.titleAnimes}
        >
          Animes mejor evaluados
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
          Animes más populares
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
