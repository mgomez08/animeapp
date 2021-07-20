import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ScrollToTop } from "../utils/scrollToTop";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { CssBaseline } from "@material-ui/core";

import { Home } from "../pages/Home";
import { Error404 } from "../pages/Error404";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    minHeight: "100%",
  },
}));

export const AppRouter = () => {
  const classes = useStyles();
  return (
    <Router>
      <ScrollToTop />
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <main className={classes.main}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Error404} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
