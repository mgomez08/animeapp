import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { PosterAnime } from "../PosterAnime/PosterAnime";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

export const PopularAnimes = ({ popularAnimes }) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [numPosters, setNumPosters] = useState(5);
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if (windowDimensions.width >= 1281) {
      setNumPosters(5);
    } else if (windowDimensions.width <= 1280 && windowDimensions.width >= 0) {
      setNumPosters(4);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line
  }, [getWindowDimensions()]);
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
    >
      {popularAnimes.map((anime, i) => {
        if (i + 1 <= numPosters) {
          return (
            <Grid item xs={6} sm={3} md={3} lg={2} key={i} zeroMinWidth>
              <PosterAnime anime={anime} />
            </Grid>
          );
        }
        return null;
      })}
    </Grid>
  );
};