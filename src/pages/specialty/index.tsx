import { FC } from "react";
import { styled } from "styled-components";
import {
  xXSmallMobile,
  xxxSmallMobile,
  xxxxSmallMobile,
} from "../../responsive";
import { Header } from "./components/Header";
import { VedioContainer } from "./components/vedio/VedioContainer";
import { ARMissingAppointment, MissingAppointment } from "./components/paragraphs/MissingAppointment";
import { ARTechnicalError, TechnicalError } from "./components/paragraphs/TechnicalError";
import { ARTransportationAllowance, TransportationAllowance } from "./components/paragraphs/TransportationAllowance";
import { ARMissedRecording, MissedRecording } from "./components/paragraphs/MissedRecording";
import { ARWaitingTime, WaitingTime } from "./components/paragraphs/WaitingTime";
import { useLang } from "../../i18n/Metronici18n";
import { useIntl } from "react-intl";
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
  const lang = useLang();
  const intl = useIntl();
  return (
    <Container>
      <Header />
      <InnerContainer className="d-flex justify-content-center align-items-center flex-column">
        <ContactContainer className="d-flex justify-content-evenly align-items-center  flex-wrap w-100 flex-column">
          <VedioContainer vedioId="VpdoHyEV-HY" title={intl.formatMessage({ id: 'compensable_waiting' })}>
            {lang == 'ar' ? <ARWaitingTime /> : <WaitingTime />}
          </VedioContainer>

          <VedioContainer
            vedioId="eEqfhrs14aU"
            title={intl.formatMessage({ id: 'missing_appointments' })}
          >
            {lang == 'ar' ? <ARMissingAppointment /> : <MissingAppointment />}

          </VedioContainer>

          <VedioContainer
            vedioId="4kGE5lPiU_M"
            title={intl.formatMessage({ id: 'technical_error_compensable' })}
          >
            {lang == 'ar' ? <ARTechnicalError /> : <TechnicalError />}

          </VedioContainer>

          <VedioContainer
            vedioId="G04iUj4D4Es"
            title={intl.formatMessage({ id: 'transportation_allowance' })}

          >
            {lang == 'ar' ? <ARTransportationAllowance /> : <TransportationAllowance />}

          </VedioContainer>

          <VedioContainer
            vedioId="fnSnLTC4oic"
            title={intl.formatMessage({ id: 'missed_recordings_and_corrections' })}
          >
            {lang == 'ar' ? <ARMissedRecording /> : <MissedRecording />}

          </VedioContainer>
        </ContactContainer>
      </InnerContainer>
    </Container>
  );
};
