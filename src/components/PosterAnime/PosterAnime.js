import React from "react";
import PropTypes from "prop-types";
import { CardMedia, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  poster: {
    maxWidth: 280,
    height: 390,
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
export const PosterAnime = ({ nameAnime, urlImage }) => {
  const classes = useStyles();
  return (
    <CardMedia
      title={nameAnime}
      image={urlImage}
      className={classes.poster}
    ></CardMedia>
  );
};

PosterAnime.propTypes = {
  nameAnime: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
};
