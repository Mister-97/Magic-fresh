import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={4000}
      style={{ height: "100%" }}
      controls={false}
      indicators={false}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="homepage/banner-1.png"
          alt="Image 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="homepage/banner-2.png"
          alt="Image 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="homepage/banner-3.png"
          alt="Image 3"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
