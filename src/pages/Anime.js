import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAnimeData } from "../api/AnimeAPI";
import { AnimeCover } from "../components/Anime/AnimeCover";
import { TabsAnime } from "../components/Anime/TabsAnime";
import { Loading } from "../components/Loading/Loading";
import { Error404 } from "./Error404";
import { Helmet } from "react-helmet";

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
        animeData.data !== undefined ? (
          <>
            <Helmet>
              <title>{`${animeData.data.attributes.canonicalTitle} | Anime App`}</title>
              <meta
                name="description"
                content={animeData.data.attributes.canonicalTitle}
              ></meta>
              <meta
                name="description"
                content={animeData.data.attributes.synopsis}
              ></meta>
              <meta
                name="keywords"
                content="anime, noticias de anime, mejores animes"
              ></meta>
            </Helmet>
            <AnimeCover animeData={animeData.data} />
            <TabsAnime
              animeData={animeData.data}
              included={animeData.included}
            />
          </>
        ) : (
          <>
            <Helmet>
              <title>Error 404 | Anime App</title>
            </Helmet>
            <Error404 />
          </>
        )
      ) : (
        <>
          <Helmet>
            <title>Cargando...</title>
          </Helmet>
          <Loading />
        </>
      )}
    </>
  );
};
