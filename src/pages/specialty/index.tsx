import { FC } from "react";
import { styled } from "styled-components";
import {
  xXSmallMobile,
  xxxSmallMobile,
  xxxxSmallMobile,
} from "../../responsive";
import { Header } from "./components/Header";
import { Waiting } from "./components/paragraphs";
import { VedioContainer } from "./components/vedio/VedioContainer";
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

export const SpecialtyPage: FC = () => {
  return (
    <Container>
      <Header />
      <InnerContainer className="d-flex justify-content-center align-items-center flex-column">
        <ContactContainer className="d-flex justify-content-evenly align-items-center  flex-wrap w-100 flex-column">
          <VedioContainer vedioId="VpdoHyEV-HY" title="Compensable Waiting">
            <Waiting />
          </VedioContainer>

          <VedioContainer
            vedioId="VpdoHyEV-HY"
            title="Missing appointments by NiS is compensable"
          >
            <Waiting />
          </VedioContainer>

          <VedioContainer
            vedioId="VpdoHyEV-HY"
            title="Technical error is compensable"
          >
            <Waiting />
          </VedioContainer>

          <VedioContainer
            vedioId="VpdoHyEV-HY"
            title="Transportation allowance"
          >
            <Waiting />
          </VedioContainer>

          <VedioContainer
            vedioId="fnSnLTC4oic"
            title="Missed recordings and corrections are compensable"
          >
            <Waiting />
          </VedioContainer>
        </ContactContainer>
      </InnerContainer>
    </Container>
  );
};
