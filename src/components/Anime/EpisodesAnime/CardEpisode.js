import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core/";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  rootCard: {
    maxWidth: 549,
    maxHeight: 364.81,
  },
  cardMedia: {
    maxWidth: 549,
    maxHeight: 364.81,
  },
  cardContent: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  titles: {
    display: "inline",
  },
  link: {
    textDecoration: "none",
  },
}));
export const CardEpisode = ({ episodeData, animeData }) => {
  const classes = useStyles();
  let dataEpisodeFlag;
  if (episodeData.attributes.thumbnail === null) {
    dataEpisodeFlag = false;
  } else {
    dataEpisodeFlag = true;
  }
  return (
    <Link
      to={`/anime/${animeData.slug}/${episodeData.attributes.number}`}
      className={classes.link}
    >
      <Card className={classes.rootCard} raised={true}>
        <CardActionArea>
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
                ? episodeData.attributes.thumbnail.original
                : animeData.coverImage.original
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
                : `${episodeData.attributes.length} minutos`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
