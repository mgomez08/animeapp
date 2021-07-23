import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { PosterAnime } from "../PosterAnime/PosterAnime";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

export const PopularAnimes = () => {
  const data = [
    {
      nameAnime: "Shingeki no Kyojin",
      urlImage:
        "https://media.kitsu.io/anime/poster_images/7442/large.jpg?1597698856",
    },
    {
      nameAnime: "One Punch Man",
      urlImage:
        "https://media.kitsu.io/anime/poster_images/10740/large.jpg?1597698857",
    },
    {
      nameAnime: "Boku no Hero Academia",
      urlImage:
        "https://media.kitsu.io/anime/poster_images/11469/large.jpg?1597698779",
    },
    {
      nameAnime: "Boku no Hero Academia 2",
      urlImage:
        "https://media.kitsu.io/anime/poster_images/12268/large.jpg?1597699083",
    },
    {
      nameAnime: "Hagane no Renkinjutsushi: Fullmetal Alchemist",
      urlImage:
        "https://media.kitsu.io/anime/poster_images/3936/large.jpg?1597690778",
    },
  ];
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
      {data.map((anime, i) => {
        if (i + 1 <= numPosters) {
          return (
            <Grid item xs={6} sm={3} md={3} lg={2} key={i} zeroMinWidth>
              <PosterAnime
                nameAnime={anime.nameAnime}
                urlImage={anime.urlImage}
              />
            </Grid>
          );
        }
        return null;
      })}
    </Grid>
  );
};
