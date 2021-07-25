import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAnimeData } from "../api/AnimeAPI";
import { AnimeCover } from "../components/Anime/AnimeCover";
import { TabsAnime } from "../components/Anime/TabsAnime";
import { Loading } from "../components/Loading/Loading";
import { Error404 } from "./Error404";

export const Anime = () => {
  const { animeSlug } = useParams();
  const [animeData, setAnimeData] = useState(null);

  useEffect(() => {
    async function fetchAnime() {
      setAnimeData(await fetchAnimeData(animeSlug));
    }
    fetchAnime();
  }, [animeSlug]);
  return (
    <>
      {animeData ? (
        <>
          <AnimeCover animeData={animeData.data} />
          <TabsAnime animeData={animeData.data} included={animeData.included} />
        </>
      ) : animeData === undefined ? (
        <Error404 />
      ) : (
        <Loading />
      )}
    </>
  );
};
