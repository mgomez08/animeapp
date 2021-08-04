import React from "react";
import { Typography, makeStyles } from "@material-ui/core/";

import logo from "../../assets/png/LogoIcon.png";
import { Link } from "react-router-dom";
import { SearchBox } from "./SearchBox";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    flexDirection: "row",
    minHeight: "60px",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(0, 5),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 2),
    },
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
  },
  logo: {
    height: 35,
    width: 35,
  },
  link: {
    textDecoration: "none",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "space-between",
  },
  logoText: {
    marginLeft: "7px",
    marginTop: "4px",
  },
}));
export const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Link to="/" className={classes.link}>
        <div className={classes.logoContainer}>
          <img src={logo} alt="Logo" className={classes.logo} />
          <Typography
            variant="h6"
            color="textPrimary"
            className={classes.logoText}
          >
            Anime App
          </Typography>
        </div>
      </Link>
      <SearchBox />
    </header>
  );
};
