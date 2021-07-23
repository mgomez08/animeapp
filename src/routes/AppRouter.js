import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline, makeStyles } from "@material-ui/core/";
import { ScrollToTop } from "../utils/scrollToTop";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

import { Home } from "../pages/Home";
import { Error404 } from "../pages/Error404";
import { AnimeRoutes } from "./AnimeRoutes";

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
            <Route path="/anime" component={AnimeRoutes} />
            <Route component={Error404} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
