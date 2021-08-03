import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
  cardResultContainer: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(1),
  },
  imgAnime: {
    width: 45,
    height: 64,
    marginRight: theme.spacing(1),
  },
}));
export const CardResult = ({ handleClickAway, animeData }) => {
  const classes = useStyles();
  return (
    <>
      <Link
        to={`/anime/${animeData.attributes.slug}`}
        onClick={handleClickAway}
        className={classes.link}
      >
        <div className={classes.cardResultContainer}>
          <img
            src={animeData.attributes.posterImage.tiny}
            alt={animeData.attributes.canonicalTitle}
            className={classes.imgAnime}
          />
          <Typography variant="body2" color="textPrimary">
            {animeData.attributes.canonicalTitle}
          </Typography>
        </div>
      </Link>
      <Divider />
    </>
  );
};
