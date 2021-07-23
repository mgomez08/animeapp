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
export const PosterAnime = ({ nameAnime, urlImage }) => {
  const classes = useStyles();
  const url = nameAnime
    .toLowerCase()
    .replace(/[`~!@#$%^&*()_\-+=\]{};:'"\\|,.<>?\s]/g, " ")
    .replace(/^\s+|\s+$/gm, "")
    .replace(/\s+/g, "-");

  return (
    <Link to={`/anime/${url}`}>
      <img src={urlImage} alt={nameAnime} className={classes.poster}></img>
    </Link>
  );
};

PosterAnime.propTypes = {
  nameAnime: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
};
