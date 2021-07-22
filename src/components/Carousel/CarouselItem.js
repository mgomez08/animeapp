import React from "react";
import { makeStyles, CardMedia, Typography } from "@material-ui/core";

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
    flexDirection: "row",
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
}));
export const CarouselItem = (props) => {
  const classes = useStyles();
  return (
    <>
      <CardMedia
        className={classes.media}
        image={props.item.link}
        title={props.item.name}
      ></CardMedia>
      <div className={classes.overlay}>
        <div className={classes.title}>
          <Typography
            variant="h4"
            color="textPrimary"
            align="center"
            className={classes.fontStyle}
          >
            {props.item.name}
          </Typography>
        </div>
      </div>
    </>
  );
};
