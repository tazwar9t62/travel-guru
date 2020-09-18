import React from "react";
import { Carousel } from "3d-react-carousal";
import { Button, Card } from "@material-ui/core";

const CarouselPlaces = () => {
  let slides = [
    <>
      <img src="https://picsum.photos/800/301/?random" alt="2" />
      <h3>Teknaf</h3>
      <button>booking</button>
    </>,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />,
  ];
  return (
    <Carousel
      className="mt-4"
      slides={slides}
      autoplay={true}
      interval={10000}
    />
  );
};

export default CarouselPlaces;
