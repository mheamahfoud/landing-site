import { styled } from "styled-components";
import SectionTitle from "../../../../components/titles/SectionTitle";
import { CircleCard } from "../../../../components/jobs/CircleCard";
import { ButtonLink } from "../../../../components/buttons/normal/ButtonLink";
import { VoiceLibrary } from "./VoiceLibrary";
import { TazmeenSystem } from "./TazmeenSystem";
import { NISSFX } from "./NISSFX";

const Container = styled.div`
  position: relative;
  background: white;
  width: 1300px;
`;

const Top = styled.div``;
const Cards = styled.div``;
const CircleCards = styled.div``;
const SquareCards = styled.div``;
const Innovations = () => {
  return (
    <Container
      className="row d-flex flex-column justify-content-center"
      style={{ gap: "50px" }}
    >
      <SectionTitle title={"Our innovations"} sectionNumber="05" />

      <Cards
        className="d-flex flex-column justify-content-between"
        style={{ gap: "30px" }}
      >
        <CircleCards className="d-flex justify-content-between">
          <CircleCard
            title={"Voice Library"}
            url={
              "https://www.nistudio.net/images/voice%20library.jpg?crc=193653680"
            }
          />
          <CircleCard
            title={"Voice Library"}
            url={
              "https://www.nistudio.net/images/voice%20library.jpg?crc=193653680"
            }
          />
          <CircleCard
            title={"Voice Library"}
            url={
              "https://www.nistudio.net/images/voice%20library.jpg?crc=193653680"
            }
          />
        </CircleCards>

        <SquareCards className="d-flex justify-content-between">
     
          <TazmeenSystem />
          <NISSFX />
        </SquareCards>
      </Cards>
    </Container>
  );
};

export default Innovations;
