import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';

const Clients = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section className="clients">
      <div className="client-container">
        <div>
          <label className="client-container__topic">HEAR FROM <br />OUR CLIENTS</label>
        </div>
        <div className="client-container__slider">
          <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
            <Carousel.Item>
              <label className="client-container__slider-label">“Magic Fresh name speaks for itself, the Cleaner assigned to me was on time, fast and very respectful! This is my 4th time using them.”<br /><br /> - Susan</label>
            </Carousel.Item>
            <Carousel.Item>
              <label className="client-container__slider-label">“Love love love their work!!!! Highly recommend.”<br /><br /> - Stephanie</label>
            </Carousel.Item>
            <Carousel.Item>
              <label className="client-container__slider-label">“By far the best cleaning service I had, highly recommend!”<br /><br /> - Juwan</label>
            </Carousel.Item>
            <Carousel.Item>
              <label className="client-container__slider-label">“Great experience! Fast response time, punctual, affordable, and quality work.”<br /><br /> - Jamie</label>
            </Carousel.Item>
          </Carousel>
          <div className="carousel-border"></div>
          <span className="carousel-indicator">{index + 1}/4</span>
        </div>
      </div>
    </section>
  )
};

export default Clients;