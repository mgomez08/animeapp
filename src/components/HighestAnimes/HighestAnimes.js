import React, { useState, useEffect } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { PosterAnime } from "../PosterAnime/PosterAnime";

const useStyles = makeStyles((theme) => ({
  animes: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingBottom: 10,
  },
}));

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
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line
  }, [getWindowDimensions()]);

  const classes = useStyles();
  return (
    <Grid
      className={classes.animes}
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
    >
      {data.map((anime, i) => {
        return (
          <Grid item>
            <PosterAnime
              key={i}
              nameAnime={anime.nameAnime}
              urlImage={anime.urlImage}
            />
          </Grid>
        );
      })}
    </Grid>
  );
});
