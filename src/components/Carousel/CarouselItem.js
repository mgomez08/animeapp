import React from "react";
import { makeStyles, CardMedia, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 400,
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
  },
  overlay: {
    height: 400,
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
    background: " rgba(0, 0, 0, .6)",
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "100%",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 400,
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
    paddingBottom: 100,
  },
  fontStyle: {
    fontStyle: "italic",
  },
  button: {
    marginTop: theme.spacing(4),
  },
  link: {
    textDecoration: "none",
  },
}));
export const CarouselItem = ({ anime }) => {
  const classes = useStyles();
  return (
    <>
      <CardMedia
        className={classes.media}
        image={anime.attributes.coverImage.original}
        title={anime.attributes.canonicalTitle}
      />
      <div className={classes.overlay}>
        <div className={classes.title}>
          <Typography
            variant="h4"
            color="textPrimary"
            align="center"
            className={classes.fontStyle}
          >
            {anime.attributes.canonicalTitle}
          </Typography>
          <Link to={`/anime/${anime.attributes.slug}`} className={classes.link}>
            <Button
              className={classes.button}
              variant="outlined"
              color="primary"
            >
              View more
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
