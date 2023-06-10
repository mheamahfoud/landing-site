import { FC, useEffect } from "react";
import { Slider } from "./components/slider/Slider";
import AnimationLogo from "../../components/animationLogo";
import { styled } from "styled-components";
import {
  desktop,
  laptop,
  mobile,
  smallMobile,
  tablet,
  xSmallMobile,
  xXSmallMobile,
  xxxSmallMobile,
  xxxxSmallMobile,
} from "../../responsive";
import SentenceRotator from "./components/specilacities/SentenceRotator";
import VerticalSentence from "./components/specilacities/VerticalSentence";
import AboutUs from "./components/aboutUs";
import { Jobs } from "./components/jobs";
import DubbingAlbum from "./components/dubbingCategories";
import Services from "./components/services";
import { BackGround } from "./components/backGround";
import Innovations from "./components/innovations";
import { useLocation } from "react-router-dom";
import DubbingService from "./components/dubbingSerivices";
import { useMediaQuery } from "react-responsive";
import { MobileSlider } from "./components/slider/MobileSlider";
import { useIntl } from "react-intl";
const ContainerAnimationSlider = styled.div`
  ${desktop({
    height: "90vh",
  })}
  ${laptop({
    height: "95vh",
  })}
  ${tablet({
    height: "70vh",
  })}
 ${mobile({
    height: "70vh",
  })}
 ${smallMobile({
    height: "50vh",
  })}
 ${xSmallMobile({
    height: "50vh",
  })}

${xXSmallMobile({
    height: "50vh",
  })}
 ${xxxSmallMobile({
    height: "40vh",
  })}
 ${xxxxSmallMobile({
    height: "30vh",
  })}
`;

const Container = styled.div`
  position: relative;
  background: white;
  z-index: 2;
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  width: 90%;
  /* ${desktop({ width: "1195px" })}
        ${laptop({ width: "1160px" })}
        ${tablet({ width: "900px" })}
        ${mobile({ width: "700px" })}
        ${smallMobile({ width: "700px" })}
        ${xSmallMobile({ width: "600px" })}
        ${xXSmallMobile({ width: "520px" })}
        ${xxxSmallMobile({ width: "330px" })}
        ${xxxxSmallMobile({ width: "330px" })} */
  gap: 20px;
`;

const Landing: FC = () => {
  const intl=useIntl();
  const location = useLocation();
  const isSmallScreen = useMediaQuery({ maxWidth: 568 });
  useEffect(() => {
    const sectionId = location.hash.substr(1);
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      {!isSmallScreen && (
        <>
          <Slider />
          <section id="home">
            <ContainerAnimationSlider className="d-flex flex-column justify-content-center align-items-center animation-logo">
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{
                  textAlign: "center",
                  position: "relative",
                  bottom: "5%",
                }}
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
          </section>
        </>
      )}
      {isSmallScreen && (
        <>
          <MobileSlider />
          <section id="home">
            <ContainerAnimationSlider className="d-flex flex-column justify-content-center align-items-center animation-logo">
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{
                  textAlign: "center",
                  position: "relative",
                  bottom: "5%",
                }}
              >
                <AnimationLogo />
                <SentenceRotator
                  sentences={[
                    intl.formatMessage({id:'speed_performance'}),
                    intl.formatMessage({id:'quality_implementatiy'}),
                    intl.formatMessage({id:'speed_performance'}),
                    "Speed in performance",
                    "Quality In Implementation",
                    "Punctuality",
                  ]}
                />
              </div>
              <VerticalSentence />
            </ContainerAnimationSlider>
          </section>
        </>
      )}
      <Container className="d-flex justify-content-center">
        <InnerContainer className="d-flex flex-column align-items-center">
          <section id="about" className="w-100">
            <AboutUs />
          </section>
          <section id="dubservice" className="w-100">
            <DubbingService />
          </section>
        </InnerContainer>
      </Container>

      <section>
        <Jobs />
      </section>
      <Container className="d-flex justify-content-center">
        <InnerContainer className="d-flex flex-column align-items-center">
          <section>
            <DubbingAlbum />
          </section>
          <section id="services">
            <Services />
          </section>
        </InnerContainer>
      </Container>

  {  !isSmallScreen &&   <BackGround />}

      <Container className="d-flex justify-content-center">
        <InnerContainer className="d-flex flex-column align-items-center">
          <section id="innovation">
            <Innovations />
          </section>
        </InnerContainer>
      </Container>
    </>
  );
};

export { Landing };
