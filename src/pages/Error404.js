import React from "react";
import { makeStyles } from "@material-ui/core";
import error404 from "../assets/jpg/404Img.jpg";

const useStyles = makeStyles((theme) => ({
  NotFound: {
    width: "100%",
    height: "95vh",
    objectFit: "cover",
    objectPosition: "bottom",
    marginTop: theme.spacing(-3),
    marginBottom: theme.spacing(-4),
  },
}));
export const Error404 = () => {
  const classes = useStyles();
  return (
    <>
      <img src={error404} alt="" className={classes.NotFound} />
    </>
  );
};
