import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { styled } from "styled-components";
import ContactInfo from "./components/ContactInfo";
import EmbeddedMap from "./components/Map";
import { Image } from "./components/Image";
import {
  xXSmallMobile,
  xxxSmallMobile,
  xxxxSmallMobile,
} from "../../responsive";
const Container = styled.div`
  position: "relative";
  background: "white";
  z-index: "2";
  display: "flex";
  flex-direction: "column";
  align-items: "center";
  width: "100%";
`;
const InnerContainer = styled.div`
  width: 100%;
`;
const ContactContainer = styled.div`
  margin: 5% 0;
  ${xXSmallMobile({ flexDirection: "column" })}
  ${xxxSmallMobile({ flexDirection: "column" })}
  ${xxxxSmallMobile({ flexDirection: "column" })}
`;
export const ContactInfoPage: FC = () => {
  const location = useLocation();
  const { url } = location.state;
  return (
    <Container>
      <Header url={url} />
      <InnerContainer className="d-flex justify-content-center align-items-center flex-column">
        <ContactContainer className="d-flex justify-content-evenly align-items-center flex-row-reverse flex-wrap w-100  ">
          <ContactInfo />
          <Image />
        </ContactContainer>

        <EmbeddedMap />
      </InnerContainer>
    </Container>
  );
};
