import React from "react";
import minutesToHours from "date-fns/minutesToHours";
import format from "date-fns/format";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  animeDetails: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      width: 247,
      position: "relative",
      top: -200,
    },
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  containerDetail: {
    flexWrap: "nowrap",
    paddingRight: theme.spacing(1),
  },
  detail: {
    minWidth: "50%",
    marginBottom: theme.spacing(2),
  },
}));
export const AnimeDetails = ({ animeData, included }) => {
  let oneProducer = 0;
  const classes = useStyles();
  return (
    <div className={classes.animeDetails}>
      <Typography
        variant="h5"
        color="textSecondary"
        align="center"
        className={classes.title}
      >
        Anime Details
      </Typography>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          className={classes.containerDetail}
          xs={12}
          sm={6}
          lg={12}
          item
        >
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.detail}
          >
            Japonés
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            className={classes.detail}
          >
            {animeData.titles.ja_jp}
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          className={classes.containerDetail}
          xs={12}
          sm={6}
          lg={12}
          item
        >
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.detail}
          >
            {`Japonés (Romaji)`}
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            className={classes.detail}
          >
            {animeData.titles.en_jp}
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          className={classes.containerDetail}
          xs={12}
          sm={6}
          lg={12}
          item
        >
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.detail}
          >
            Tipo
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            className={classes.detail}
          >
            {animeData.subtype}
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          className={classes.containerDetail}
          xs={12}
          sm={6}
          lg={12}
          item
        >
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.detail}
          >
            Estado
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            className={classes.detail}
          >
            {animeData.status}
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          className={classes.containerDetail}
          xs={12}
          sm={6}
          lg={12}
          item
        >
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.detail}
          >
            Episodios
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            className={classes.detail}
          >
            {animeData.episodeCount}
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          className={classes.containerDetail}
          xs={12}
          sm={6}
          lg={12}
          item
        >
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.detail}
          >
            Duración
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            className={classes.detail}
          >
            {`${minutesToHours(animeData.totalLength)} Horas(s) (de ${
              animeData.episodeLength
            } min cada episodio)`}
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          className={classes.containerDetail}
          xs={12}
          sm={6}
          lg={12}
          item
        >
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.detail}
          >
            Emitido
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            className={classes.detail}
          >
            {`${format(new Date(animeData.startDate), "MMM. d, yyyy")}`}
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          className={classes.containerDetail}
          xs={12}
          sm={6}
          lg={12}
          item
        >
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.detail}
          >
            Estudios
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            className={classes.detail}
          >
            {included.map((item, i) => {
              if (item.type === "producers") {
                if (oneProducer === 0) {
                  oneProducer++;
                  return item.attributes.name;
                }
                return `, ${item.attributes.name}`;
              }
              return null;
            })}
            {!oneProducer && "Not found"}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
