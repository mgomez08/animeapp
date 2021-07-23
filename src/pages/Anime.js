import React from "react";
import { useParams } from "react-router-dom";

export const Anime = () => {
  const { animeSlug } = useParams();
  return (
    <div>
      <h1>{`Estamos en anime ${animeSlug}`}</h1>
    </div>
  );
};
