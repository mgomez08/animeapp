import React from "react";
import { CardMedia, Typography, makeStyles } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  animeCover: {
    marginTop: theme.spacing(-3),
    maxHeight: "100%",
    maxWidth: "100%",
  },
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
    top: 60,
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
    paddingBottom: theme.spacing(2),
  },
}));
export const AnimeCover = ({ animeData }) => {
  const classes = useStyles();
  return (
    <div className={classes.animeCover}>
      <CardMedia
        className={classes.media}
        image={
          animeData.attributes.coverImage
            ? animeData.attributes.coverImage.original
            : "https://images2.alphacoders.com/788/thumb-1920-788976.jpg"
        }
        title={animeData.attributes.canonicalTitle}
      />
      <div className={classes.overlay}>
        <div className={classes.title}>
          <Typography
            variant="h3"
            color="textPrimary"
            align="center"
            className={classes.fontStyle}
          >
            {animeData.attributes.canonicalTitle}
          </Typography>
        </div>
      </div>
    </div>
  );
};
