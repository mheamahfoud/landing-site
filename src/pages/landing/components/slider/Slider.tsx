import { Carousel } from "react-bootstrap";
import "./style.css";
import { useState } from "react";
import FirstItemImg from '../../../../assets/images/first-item-slider.jpg'
import SeconditemImg from '../../../../assets/images/second-item-slider.jpg'
import styled from "styled-components";
const FirstImage =styled.div`
    background-image: url(${FirstItemImg}) ;
    background-size: cover;
    background-position: center;

`;
const SecondImage =styled.div`
  background-image: url(${SeconditemImg}) ;
    background-size: cover;
    background-position: center;

`;
export function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex:number) => {
    setActiveIndex(selectedIndex);
  
  };
  return (
    <Carousel
      controls={false}
      interval={4000}
      pause={false}
      indicators={false}
      fade
      className="main-slider"
      style={{ background: "#000000" }}
      activeIndex={activeIndex}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <img
          className="slider-img"
          src={FirstItemImg}
          alt="First slide"
        />
       
      </Carousel.Item>

      <Carousel.Item>
        <div>

        </div>
        <img
          className="slider-img"
          src={SeconditemImg}
          alt="Second slide"
        />
    
      </Carousel.Item>
    </Carousel>
  );
}
