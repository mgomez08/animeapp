import React from "react";
import { default as CarouselMUI } from "react-material-ui-carousel";
import { CarouselItem } from "./CarouselItem";

export const Carousel = ({ animesTreding }) => {
  return (
    <CarouselMUI animation="fade">
      {animesTreding.map((anime, i) => (
        <CarouselItem key={i} anime={anime} />
      ))}
    </CarouselMUI>
  );
};
