import React from "react";
import { Route, Switch } from "react-router-dom";
import { Anime } from "../pages/Anime";

export const AnimeRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/anime/:animeSlug" component={Anime} />
      </Switch>
    </>
  );
};
