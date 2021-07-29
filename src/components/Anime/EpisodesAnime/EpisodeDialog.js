import React from "react";
import {
  makeStyles,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  CardMedia,
} from "@material-ui/core";
import format from "date-fns/format";

const useStyles = makeStyles((theme) => ({
  containerTitles: {
    display: "flex",
  },
  title: {
    padding: theme.spacing(2, 3),
  },
  titleEpisode: {
    padding: theme.spacing(2, 0),
  },
  cardMedia: {
    marginTop: theme.spacing(1),
    maxWidth: 549,
    maxHeight: 364.81,
  },
  containerImg: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const EpisodeDialog = ({
  open,
  setOpen,
  episodeData,
  animeData,
  dataEpisodeFlag,
}) => {
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
        <div className={classes.containerTitles}>
          <Typography
            variant="h6"
            color="textSecondary"
            className={classes.title}
          >
            {`Episodio ${episodeData.number}: `}
          </Typography>
          <Typography
            variant="h6"
            color="textPrimary"
            className={classes.titleEpisode}
          >
            {dataEpisodeFlag
              ? episodeData.canonicalTitle
              : `${episodeData.length} minutos`}
          </Typography>
        </div>
        <DialogContent dividers>
          <Typography variant="body1" color="textPrimary">
            {episodeData.synopsis}
          </Typography>
          <Typography variant="body1" color="textPrimary">
            {`Duración: ${episodeData.length} min`}
          </Typography>
          <Typography variant="body1" color="textPrimary">
            {dataEpisodeFlag
              ? `Emitido: ${format(
                  new Date(episodeData.airdate),
                  "MMM. d, yyyy"
                )}`
              : null}
          </Typography>
          <div className={classes.containerImg}>
            <CardMedia
              className={classes.cardMedia}
              component="img"
              alt={`Imagen del episodio ${
                dataEpisodeFlag
                  ? episodeData.canonicalTitle
                  : animeData.canonicalTitle
              }`}
              image={
                dataEpisodeFlag
                  ? episodeData.thumbnail.original
                  : animeData.coverImage.original
              }
              title={`Imagen del episodio ${
                dataEpisodeFlag
                  ? episodeData.canonicalTitle
                  : animeData.canonicalTitle
              }`}
            />
          </div>
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
