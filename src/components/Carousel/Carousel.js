import React from "react";
import { default as CarouselMUI } from "react-material-ui-carousel";
import { CarouselItem } from "./CarouselItem";

export const Carousel = ({ animeTreding }) => {
  return (
    <CarouselMUI animation="fade">
      {animeTreding.map((anime, i) => (
        <CarouselItem key={i} anime={anime} />
      ))}
    </CarouselMUI>
  );
};
