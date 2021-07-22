import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  poster: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));
export const PosterAnime = ({ nameAnime, urlImage }) => {
  const classes = useStyles();
  return <img src={urlImage} alt={nameAnime} className={classes.poster}></img>;
};

PosterAnime.propTypes = {
  nameAnime: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
};
