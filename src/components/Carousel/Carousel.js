import React from "react";
import { default as CarouselMUI } from "react-material-ui-carousel";
import { CarouselItem } from "./CarouselItem";

export const Carousel = () => {
  var items = [
    {
      name: "Jujutsu Kaisen",
      link: "https://media.kitsu.io/anime/cover_images/42765/original.jpeg?1619890533",
    },
    {
      name: "Fumetsu no Anata e",
      link: "https://media.kitsu.io/anime/cover_images/43211/original.jpg?1616117146",
    },
  ];

  return (
    <CarouselMUI autoPlay={false} animation="slide">
      {items.map((item, i) => (
        <CarouselItem key={i} item={item} />
      ))}
    </CarouselMUI>
  );
};
