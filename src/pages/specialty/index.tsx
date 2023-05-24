import { FC } from "react";
import { styled } from "styled-components";
import {
  xXSmallMobile,
  xxxSmallMobile,
  xxxxSmallMobile,
} from "../../responsive";
import { Header } from "./components/Header";
import { VedioContainer } from "./components/vedio/VedioContainer";
import { MissingAppointment } from "./components/paragraphs/MissingAppointment";
import { TechnicalError } from "./components/paragraphs/TechnicalError";
import { TransportationAllowance } from "./components/paragraphs/TransportationAllowance";
import { MissedRecording } from "./components/paragraphs/MissedRecording";
import { WaitingTime } from "./components/paragraphs/WaitingTime";
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
            <WaitingTime />
          </VedioContainer>

          <VedioContainer
            vedioId="eEqfhrs14aU"
            title="Missing appointments by NiS is compensable"
          >
            <MissingAppointment />
          </VedioContainer>

          <VedioContainer
            vedioId="4kGE5lPiU_M"
            title="Technical error is compensable"
          >
            <TechnicalError />
          </VedioContainer>

          <VedioContainer
            vedioId="G04iUj4D4Es"
            title="Transportation allowance"
          >
            <TransportationAllowance />
          </VedioContainer>

          <VedioContainer
            vedioId="fnSnLTC4oic"
            title="Missed recordings and corrections are compensable"
          >
            <MissedRecording />
          </VedioContainer>
        </ContactContainer>
      </InnerContainer>
    </Container>
  );
};
