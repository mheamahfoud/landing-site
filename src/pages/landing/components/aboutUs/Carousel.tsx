import { useState } from "react";
import { styled } from "styled-components";
import "./style.css";
import { ButtonSlider } from "../../../../components/buttons/normal/ButtonSlider";
import { FirstItem } from "./carouselItems/FirstItem";
import { SecondItem } from "./carouselItems/SecondITem";
import { ThirdItem } from "./carouselItems/ThirdItem";
import { useLang } from "../../../../i18n/Metronici18n";
const items = [
  { id: 1, title: FirstItem },
  { id: 2, title: SecondItem },
  { id: 3, title: ThirdItem },
];

const Icon = styled.i`
  font-size: 15px;
  color: #f15722;
`;
export const Carousel = () => {
  const lang=useLang();
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevSlide = () => {
    setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
  };

  const goToNextSlide = () => {
    setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel-about">
      <div
        className="carousel-items-about"
        style={{ transform: `translateX(${lang=='ar'? '+' :'-'}${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item-about ${
              index === activeIndex ? "active" : ""
            }`}
            style={{
              opacity: index === activeIndex ? 1 : 0, // Apply opacity based on activeIndex
              transition: "opacity 2s", // Add transition for a smooth fade effect
            }}
          >
            {<item.title />}
          </div>
        ))}
      </div>
      <div
        className="carousel-navigation-about df-flex justify-content-between align-items-center m-t"
        style={{ padding: "0 10px" }}
      >
        <div
          className="carousel-btn-about prev-about"
          style={{ position: "relative", zIndex: "5" }}
          onClick={goToPrevSlide}
        >
          <ButtonSlider>
            <Icon className={`bi ${lang =='ar' ?  'bi-chevron-right':'bi-chevron-left'}`} />
          </ButtonSlider>
        </div>
        <div className="carousel-indicators-about">
          {items.map((item, index) => (
            <span
              key={item.id}
              className={`indicator-about ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => handleIndicatorClick(index)}
            >
              {index + 1}
            </span>
          ))}
        </div>
        <div className="carousel-btn-about next-about" onClick={goToNextSlide}>
          <ButtonSlider>
          <Icon className={`bi ${lang =='ar' ?  'bi-chevron-left':'bi-chevron-right'}`} />
          </ButtonSlider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
