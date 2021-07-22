import React from "react";
import { Carousel } from "../components/Carousel/Carousel";
import { Typography, makeStyles } from "@material-ui/core/";
import { HighestAnimes } from "../components/HighestAnimes/HighestAnimes";

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
    marginLeft: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(0, 2),
    },
    marginBottom: theme.spacing(2),
  },
  titleAnimes: {
    marginBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
}));
export const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className="trending-animes">
        <Typography variant="h4" color="textPrimary" className={classes.title}>
          Trending Animes This Week
        </Typography>
        <Carousel />
      </div>
      <div className={classes.highestAnimes}>
        <Typography
          variant="h5"
          color="textSecondary"
          className={classes.titleAnimes}
        >
          Highest Rated Anime
        </Typography>
        <HighestAnimes />
      </div>
      <div className={classes.popularAnimes}>
        <Typography
          variant="h5"
          color="textSecondary"
          className={classes.titleAnimes}
        >
          Most Popular Animes
        </Typography>
      </div>
    </>
  );
};
