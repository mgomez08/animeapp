import React from "react";
import {
  makeStyles,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: 0,
  },
  embed: {
    width: "100%",
    height: "100%",
    minHeight: 180,
    [theme.breakpoints.up("sm")]: {
      height: 300,
    },
    [theme.breakpoints.up("md")]: {
      height: 400,
    },
    [theme.breakpoints.up("lg")]: {
      height: 500,
    },
  },
}));

export const TrailerDialog = ({ open, setOpen, animeData }) => {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        fullWidth={true}
        maxWidth="lg"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {`Trailer de ${animeData.canonicalTitle}`}
        </DialogTitle>
        <DialogContent dividers className={classes.dialog}>
          <iframe
            src={`https://www.youtube.com/embed/${animeData.youtubeVideoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={classes.embed}
          ></iframe>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
