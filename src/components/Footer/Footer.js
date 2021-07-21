import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LogoKitsu from "../../assets/png/kitsu.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "space-between",
    marginTop: "auto",
    minHeight: "150px",
    padding: theme.spacing(2, 3),
  },
  about: {
    minHeight: "112px",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "152px",
    },
  },
  infoAbout: {
    marginTop: theme.spacing(3),
  },
  aboutAPI: {
    minHeight: "112px",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "152px",
    },
  },
  infoAPI: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "start",
    },
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
    },
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "space-between",
  },
  logoAPI: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: theme.spacing(2),
  },
  kitsu: {
    width: "100px",
    height: "80px",
  },
}));
export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.about}>
        <Typography variant="h6" color="textSecondary">
          Developed by:
        </Typography>
        <div className={classes.infoAbout}>
          <Typography variant="body2" color="initial">
            Repositorio: https://github.com/mgomez08
          </Typography>
          <Typography variant="body2" color="initial">
            Marlon Gómez
          </Typography>
        </div>
      </div>
      <div className={classes.aboutAPI}>
        <Typography variant="h6" color="textSecondary">
          Information provided by:
        </Typography>
        <div className={classes.infoAPI}>
          <div className={classes.logoAPI}>
            <img
              src={LogoKitsu}
              alt="Logo de la API Kitsu"
              className={classes.kitsu}
            />
            <Typography variant="body1" color="textPrimary">
              KITSU
            </Typography>
          </div>
          <div>
            <Typography variant="body2" color="initial">
              Web: https://kitsu.io/explore/anime
            </Typography>
            <Typography variant="body2" color="initial">
              API: https://kitsu.docs.apiary.io/
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};
