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
      nameAnime: "Kimetsu no Yaiba: Natagumo Yama Hen",
      urlImage:
        "https://media.kitsu.io/anime/poster_images/44389/large.jpg?1618622765",
    },
    {
      nameAnime: "Shingeki no Kyojin The Final Season",
      urlImage:
        "https://media.kitsu.io/anime/poster_images/42422/large.jpg?1607339776",
    },
    {
      nameAnime: "Kimetsu no Yaiba: Mugen Ressha-hen",
      urlImage:
        "https://media.kitsu.io/anime/poster_images/42586/large.jpg?1623047315",
    },
    {
      nameAnime: "Kimetsu no Yaiba",
      urlImage:
        "https://media.kitsu.io/anime/poster_images/41370/large.jpg?1597699092",
    },
    {
      nameAnime: "Kimetsu no Yaiba: Hashira Gou Kaigi - Chouyashiki Hen",
      urlImage:
        "https://media.kitsu.io/anime/poster_images/44390/large.jpg?1618623222",
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
