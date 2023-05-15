import { FC, useEffect, useRef, useState } from "react";
import { Slider } from "./components/slider/Slider";
import AnimationLogo from "../../components/animationLogo";
import { styled } from "styled-components";
import { desktop, laptop, mobile, tablet } from "../../responsive";
import "./index.css";
import SentenceRotator from "./components/specilacities/SentenceRotator";
import VerticalSentence from "./components/specilacities/VerticalSentence";
import AboutUs from "./components/aboutUs";
import DubbingService from "./components/dubbingSerivices";

import { Jobs } from "./components/jobs";
import DubbingAlbum from "./components/dubbingAlbum";
import Services  from "./components/services";
import { BackGround } from "./components/backGround";
import Innovations from "./components/innovations";

const ContainerAnimationSlider = styled.div`
  ${desktop({
    height: "90vh",
  })}
  ${laptop({
    height: "85vh",
  })}
  ${tablet({
    height: "70vh",
  })}
 ${mobile({
    height: "50vh",
  })}
`;

const Landing: FC = () => {
  const parentRef: any = useRef(null);

  return (
    <>
      <Slider />
      <ContainerAnimationSlider className="d-flex flex-column justify-content-center align-items-center animation-logo">
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ textAlign: "center", position: "relative", bottom: "5%" }}
        >
          <AnimationLogo />
          <SentenceRotator
            sentences={[
              "Speed in performance",
              "Quality In Implementation",
              "Punctuality",
            ]}
          />
        </div>
        <VerticalSentence />
      </ContainerAnimationSlider>

      <div
        className="d-flex justify-content-center"
        style={{
          position: "relative",
          background: "white",
          zIndex: "2",
        }}
      >
        <div className="d-flex flex-column align-items-center">
          <AboutUs />
          <DubbingService />
          <Jobs />
          <DubbingAlbum />
          <Services />
        </div>
      </div>
      <BackGround />
      <div
        className="d-flex justify-content-center"
        style={{
          position: "relative",
          background: "white",
          zIndex: "2",
        }}
      >
        <div className="d-flex flex-column align-items-center">
          <Innovations />
        
        </div>
      </div>
    </>
  );
};

export { Landing };
