import { styled } from "styled-components";
import SectionTitle from "../../../../components/titles/SectionTitle";
import { InnovationCard } from "../../../../components/cards/InnovationCard";
import { TazmeenSystem } from "./TazmeenSystem";
import { NISSFX } from "./NISSFX";
import "./style.css";
import { VoiceLibrary } from "./VoiceLibrary";
const Container = styled.div`
  position: relative;
  background: white;
  margin: 20px 0;
`;


const Cards = styled.div``;
const CircleCards = styled.div``;
const SquareCards = styled.div``;
const Innovations = () => {
  return (
    <Container
      className="row d-flex flex-column justify-content-center flex-wrap"
      style={{ gap: "50px" }}
    >
      <SectionTitle title={"Our innovations"} sectionNumber="05" />

      <Cards
        className="d-flex flex-column justify-content-between flex-wrap"
        style={{ gap: "30px" }}
      >
        <CircleCards className="d-flex justify-content-between flex-wrap">
          <div className="flex-fill-item">
            <InnovationCard
              title={"Voice Library"}
              url={
                "https://www.nistudio.net/images/voice%20library.jpg?crc=193653680"
              }
            />
          </div>
          <div className="flex-fill-item">
            <InnovationCard
              title={"Tazmeen System"}
              url={
                "https://www.nistudio.net/images/tazmeen%20system%20icon.png?crc=309523358"
              }
            />
          </div>
          <div className="flex-fill-item">
            <InnovationCard
              title={"Nis SFX"}
              url={"	https://www.nistudio.net/images/nis-sfx.jpg?crc=12241689"}
            />
          </div>
        </CircleCards>

        <SquareCards className="d-flex justify-content-between flex-wrap">
          <div className="flex-fill-item"><VoiceLibrary /></div>
          <div className="flex-fill-item"><TazmeenSystem /></div>
          <div className="flex-fill-item"><NISSFX /></div>
          {/* <div className="flex-fill-item">   <NISSFX /></div> */}
        </SquareCards>
      </Cards>
    </Container>
  );
};

export default Innovations;
