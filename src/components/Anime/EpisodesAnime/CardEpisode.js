import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  rootCard: {},
  cardContent: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  titles: {
    display: "inline",
  },
}));
export const CardEpisode = ({ episodeData }) => {
  const classes = useStyles();
  return (
    <Card className={classes.rootCard} raised={true}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={`Imagen del episodio ${episodeData.attributes.canonicalTitle}`}
          image={episodeData.attributes.thumbnail.original}
          title={`Imagen del episodio ${episodeData.attributes.canonicalTitle}`}
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
            {episodeData.attributes.canonicalTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
