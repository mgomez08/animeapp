import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { TrailerDialog } from "./TrailerDialog";

const useStyles = makeStyles((theme) => ({
  viewTrailer: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      marginLeft: theme.spacing(3),
    },
    backgroundColor: "#FF0000",
    width: 150,
    height: 50,
    color: "#FFFFFF",
    borderRadius: 20,
    lineHeight: 1.5,
    fontSize: 16,
    "&:hover": {
      backgroundColor: "#FF4040",
    },
  },
  iconYoutube: {
    width: 50,
    height: 50,
    color: "#FFFFFF",
  },
}));

export const AnimeTrailer = ({ animeData }) => {
  const [state, setstate] = React.useState(false);
  const classes = useStyles();
  const handleClick = () => {
    setstate(true);
  };
  return (
    <>
      <Button
        color="secondary"
        startIcon={<YouTubeIcon className={classes.iconYoutube} />}
        className={classes.viewTrailer}
        onClick={handleClick}
      >
        Ver Trailer
      </Button>
      <TrailerDialog state={state} setstate={setstate} animeData={animeData} />
    </>
  );
};
