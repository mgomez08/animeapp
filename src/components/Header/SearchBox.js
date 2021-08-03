import React, { useState } from "react";
import {
  InputBase,
  alpha,
  makeStyles,
  ClickAwayListener,
} from "@material-ui/core/";

import SearchIcon from "@material-ui/icons/Search";
import { ResultsBox } from "./ResultsBox";

const useStyles = makeStyles((theme) => ({
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
      width: "20ch",
    },
  },
}));
export const SearchBox = () => {
  const classes = useStyles();
  const [keyword, setKeyword] = useState("");
  const [open, setOpen] = useState(false);

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
    if (keyword.length >= 2) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  const handleClick = () => {
    if (keyword.length > 0) {
      setOpen((prev) => !prev);
    }
  };
  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.searchContainer}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          onClick={handleClick}
          placeholder="Buscar..."
          value={keyword}
          onChange={handleChangeKeyword}
          classes={{
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
        {open ? (
          <ResultsBox handleClickAway={handleClickAway} keyword={keyword} />
        ) : null}
      </div>
    </ClickAwayListener>
  );
};
