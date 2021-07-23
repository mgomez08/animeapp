import React from "react";
import { default as CarouselMUI } from "react-material-ui-carousel";
import { CarouselItem } from "./CarouselItem";

export const Carousel = () => {
  var items = [
    {
      name: "One Piece",
      link: "https://media.kitsu.io/anime/cover_images/12/original.jpg?1597701689",
    },
    {
      name: "Kimetsu no Yaiba",
      link: "https://media.kitsu.io/anime/cover_images/41370/original.jpg?1597701689",
    },
    {
      name: "Naruto: Shippuuden",
      link: "https://media.kitsu.io/anime/cover_images/1555/original.jpg?1597702491",
    },
    {
      name: "Shingeki no Kyojin",
      link: "https://media.kitsu.io/anime/cover_images/7442/original.png?1597701549",
    },
    {
      name: "Hunter x Hunter (2011)",
      link: "https://media.kitsu.io/anime/cover_images/6448/original.jpg?1597702064",
    },
  ];

  return (
    <CarouselMUI animation="fade">
      {items.map((item, i) => (
        <CarouselItem key={i} item={item} />
      ))}
    </CarouselMUI>
  );
};
