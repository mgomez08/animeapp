import React from "react";
import { Route, Switch } from "react-router-dom";
import { AnimeScreen } from "../components/Anime/AnimeScreen";

export const AnimeRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/anime/:animeSlug" component={AnimeScreen} />
      </Switch>
    </>
  );
};
