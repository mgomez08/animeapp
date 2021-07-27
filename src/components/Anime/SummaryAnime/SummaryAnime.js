import React from "react";
import {
  makeStyles,
  Grid,
  useMediaQuery,
  Divider,
  Typography,
  Hidden,
} from "@material-ui/core/";
import { AnimeRanking } from "./AnimeRanking";
import { AnimeGenders } from "./AnimeGenders";
import { AnimeDetails } from "./AnimeDetails";
import { AnimeTrailer } from "./AnimeTrailer";

const useStyles = makeStyles((theme) => ({
  rootTabSummary: {
    [theme.breakpoints.up("lg")]: {
      margin: theme.spacing(3, 18),
    },
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(3, 10),
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(3, 2),
    },
  },
  posterContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  poster: {
    height: 350,
    minWidth: 247,
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "fill",
    [theme.breakpoints.up("lg")]: {
      position: "relative",
      top: -224,
    },
  },
  contentAnime: {
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(1),
    },
  },
  raiting: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(1),
    },
    color: theme.palette.success.main,
  },
  synopsis: {
    overflowWrap: "break-word",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "pre-line",
    marginBottom: theme.spacing(1),
  },
  divider: {
    backgroundColor: "#FFFFFF",
  },
}));
export const SummaryAnime = ({ animeData, included }) => {
  const classes = useStyles();
  const direction = useMediaQuery("(min-width: 960px)");
  return (
    <div className={classes.rootTabSummary}>
      <Grid
        container
        direction={direction ? "row" : "column"}
        justifyContent="space-around"
      >
        <Grid
          xs={12}
          sm={12}
          md={4}
          lg={3}
          className={classes.posterContainer}
          item
        >
          <img
            className={classes.poster}
            src={animeData.attributes.posterImage.small}
            alt={animeData.attributes.canonicalTitle}
          />
          <Hidden lgUp>
            <AnimeTrailer animeData={animeData.attributes} />
          </Hidden>
          <Hidden mdDown>
            <AnimeDetails
              animeData={animeData.attributes}
              included={included}
            />
          </Hidden>
        </Grid>
        <Grid
          container
          direction="row"
          className={classes.contentAnime}
          xs={12}
          sm={12}
          md={8}
          lg={9}
          item
        >
          <Grid xs={12} lg={10} item>
            <Typography variant="h6" className={classes.raiting}>
              {animeData.attributes.averageRating + "% de Raiting"}
            </Typography>
            <Typography variant="body1" className={classes.synopsis}>
              {animeData.attributes.synopsis}
            </Typography>
            <AnimeGenders included={included} />
            <Divider className={classes.divider} />
            <AnimeRanking
              ratingRank={animeData.attributes.ratingRank}
              popularityRank={animeData.attributes.popularityRank}
            />
            <Hidden lgUp>
              <AnimeDetails
                animeData={animeData.attributes}
                included={included}
              />
            </Hidden>
          </Grid>
          <Hidden mdDown>
            <Grid xs={false} lg={2} item>
              <AnimeTrailer animeData={animeData.attributes} />
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
};
