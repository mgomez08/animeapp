import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  poster: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "fill",
  },
}));
export const PosterAnime = ({ anime }) => {
  const classes = useStyles();
  return (
    <Link to={`/anime/${anime.attributes.slug}`}>
      <img
        src={anime.attributes.posterImage.large}
        alt={anime.attributes.canonicalTitle}
        className={classes.poster}
      ></img>
    </Link>
  );
};

PosterAnime.propTypes = {
  anime: PropTypes.object.isRequired,
};
