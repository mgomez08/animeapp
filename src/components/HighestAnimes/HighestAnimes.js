import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { PosterAnime } from "../PosterAnime/PosterAnime";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}
export const HighestAnimes = React.memo(() => {
  const data = [
    {
      nameAnime: "One Piece",
      urlImage:
        "https://media.kitsu.io/anime/poster_images/12/small.jpg?1597699104",
    },
    {
      nameAnime: "Kimetsu no Yaiba",
      urlImage:
        "https://media.kitsu.io/anime/poster_images/41370/small.jpg?1597699092",
    },
    {
      nameAnime: "Shingeki no Kyojin",
      urlImage:
        "https://media.kitsu.io/anime/poster_images/7442/small.jpg?1597698856",
    },
    {
      nameAnime: "Naruto: Shippuuden",
      urlImage:
        "https://media.kitsu.io/anime/poster_images/1555/small.jpg?1597696875",
    },
    {
      nameAnime: "Hunter x Hunter (2011)",
      urlImage:
        "https://media.kitsu.io/anime/poster_images/6448/small.jpg?1597696571",
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
});
