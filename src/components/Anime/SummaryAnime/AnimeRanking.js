import React from "react";
import { makeStyles, Typography } from "@material-ui/core/";

import FavoriteIcon from "@material-ui/icons/Favorite";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  ranking: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(3),
  },
  rankingItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
  heartIcon: {
    color: "#E74C3C",
  },
  starIcon: {
    color: "#F39C12",
  },
}));

export const AnimeRanking = ({ ratingRank, popularityRank }) => {
  const classes = useStyles();

  return (
    <div className={classes.ranking}>
      <div className={classes.rankingItem}>
        <StarIcon className={classes.starIcon} />
        <Typography variant="body1" color="textPrimary">
          {`Lugar #${ratingRank} en animes mejor evaluados`}
        </Typography>
      </div>
      <div className={classes.rankingItem}>
        <FavoriteIcon className={classes.heartIcon} />
        <Typography variant="body1" color="textPrimary">
          {`Lugar #${popularityRank} en animes populares`}
        </Typography>
      </div>
    </div>
  );
};
