import { styled } from "styled-components";
import voiceLibrarySrc from "../../../../assets/images/innovations/voice-library.jpg";
import TazmeenSystemSrc from "../../../../assets/images/innovations/tazmeen-system.png";
import NisSFXSrc from "../../../../assets/images/innovations/nis-sfx.jpg";
import SectionTitle from "../../../../components/titles/SectionTitle";
import { InnovationCard } from "../../../../components/cards/InnovationCard";
import { TazmeenSystem } from "./TazmeenSystem";
import { NISSFX } from "./NISSFX";
import "./style.css";
import { VoiceLibrary } from "./VoiceLibrary";
import { xxxSmallMobile, xxxxSmallMobile } from "../../../../responsive";
import { useIntl } from "react-intl";
const Container = styled.div`
  position: relative;
  background: white;
  margin: 20px 0;
`;

const Cards = styled.div``;
const ContainerCard = styled.div`
  gap: 30px;

  ${xxxSmallMobile({ flexDirection: "column", alignItems: "center" })}
  ${xxxxSmallMobile({ flexDirection: "column", alignItems: "center" })}
`;
const InnerContainerCard = styled.div`
  gap: 30px;
`;
const Top = styled.div`
  ${xxxSmallMobile({ justifyContent: "center" })}
  ${xxxxSmallMobile({ justifyContent: "center" })}
`;
const Innovations = () => {
  const intl = useIntl();
  return (
    <Container
      className="row d-flex flex-column justify-content-center flex-wrap"
      style={{ gap: "50px" }}
    >
      <Top className="d-flex">
        <SectionTitle
          title={intl.formatMessage({ id: "our_innovations" })}
          sectionNumber="05"
        />
      </Top>

      <Cards
        className="d-flex flex-column justify-content-between flex-wrap"
        style={{ gap: "30px" }}
      >
        <ContainerCard className="d-flex justify-content-between">
          <InnerContainerCard className="flex-fill-item d-flex flex-column  align-items-center flex-wrap">
            <InnovationCard
              title={intl.formatMessage({ id: "voice_library" })}
              url={voiceLibrarySrc}
            />
            <VoiceLibrary />
          </InnerContainerCard>

          <InnerContainerCard className="flex-fill-item align-items-center d-flex flex-column">
            <InnovationCard
              title={intl.formatMessage({ id: "tazmeen_system" })}
              url={TazmeenSystemSrc}
            />
            <TazmeenSystem />
          </InnerContainerCard>

          <InnerContainerCard className="flex-fill-item align-items-center d-flex flex-column">
            <InnovationCard title={"Nis SFX"} url={NisSFXSrc} />
            <NISSFX />
          </InnerContainerCard>
        </ContainerCard>
      </Cards>
    </Container>
  );
};

export default Innovations;
