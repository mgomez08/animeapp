import React from "react";
import { InputBase, Typography } from "@material-ui/core/";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../../assets/png/Logo.png";
import { alpha, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    flexDirection: "row",
    minHeight: "60px",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
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
    marginTop: "7px",
  },
  searchContainer: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "12ch",
    },
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
export const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <img src={logo} alt="Logo" />
        <Typography
          variant="body1"
          color="textPrimary"
          className={classes.logoText}
        >
          Wolfa
        </Typography>
      </div>
      <div className={classes.searchContainer}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Buscar..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </header>
  );
};
