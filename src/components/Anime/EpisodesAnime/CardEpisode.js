import React, { useState } from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core/";
import { EpisodeDialog } from "./EpisodeDialog";

const useStyles = makeStyles((theme) => ({
  rootCard: {
    // maxWidth: 549,
    // maxHeight: 364.81,
  },
  cardMedia: {
    // maxWidth: 549,
    // maxHeight: 364.81,
  },
  cardContent: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    // maxWidth: 549,
    // maxHeight: 364.81,
  },
  titles: {
    display: "inline",
  },
}));
export const CardEpisode = ({ episodeData, animeData }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  let dataEpisodeFlag;
  if (episodeData.attributes.thumbnail === null) {
    dataEpisodeFlag = false;
  } else {
    dataEpisodeFlag = true;
  }
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <Card className={classes.rootCard} raised={true}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={classes.cardMedia}
          component="img"
          alt={`Imagen del episodio ${
            dataEpisodeFlag
              ? episodeData.attributes.canonicalTitle
              : animeData.canonicalTitle
          }`}
          image={
            dataEpisodeFlag
              ? episodeData.attributes.thumbnail
                ? episodeData.attributes.thumbnail.original
                : animeData.posterImage.original
              : animeData.posterImage.original
          }
          title={`Imagen del episodio ${
            dataEpisodeFlag
              ? episodeData.attributes.canonicalTitle
              : animeData.canonicalTitle
          }`}
        />
        <CardContent className={classes.cardContent}>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.titles}
          >
            {`Episodio ${episodeData.attributes.number} `}
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            className={classes.titles}
          >
            {dataEpisodeFlag
              ? episodeData.attributes.canonicalTitle
              : episodeData.attributes.length
              ? `${episodeData.attributes.length} minutos`
              : null}
          </Typography>
        </CardContent>
      </CardActionArea>
      <EpisodeDialog
        episodeData={episodeData.attributes}
        animeData={animeData}
        open={open}
        setOpen={setOpen}
        dataEpisodeFlag={dataEpisodeFlag}
      />
    </Card>
  );
};
