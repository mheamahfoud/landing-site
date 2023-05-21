import { styled } from "styled-components";
import SectionTitle from "../../../../components/titles/SectionTitle";
import "./style.css";
import { MainColor } from "../../../../helpers";
const Container = styled.div`
 
`;
const NisTitel = styled.span`
  color: ${MainColor};
`;
const Dot = styled.span`
  color: ${MainColor};
`;

//Left
const MainTitle = styled.p`
  line-height: 32px;
  font-weight: bold;
  margin: 0;
`;
const SecondaryTitle = styled.p`
  line-height: 22px;
  margin: 0;
`;
const Summery = styled.p`
  line-height: 27px;
  text-align: left;
  color: #7f7f7f;
  font-family: raleway, sans-serif;
  padding-top: 27px;
  font-weight: 900;
`;

//end lf



const LeftSection = () => {
  return (
    <Container className="flex-fill-item">
        <SectionTitle title={"Sevices"} sectionNumber="04" />
        <MainTitle>
          <NisTitel>NiS</NisTitel>
          <span id="u2619-2"> offers serves in the following fields:</span>
        </MainTitle>
        <SecondaryTitle>
          <Dot>•</Dot> <span id="u2619-6">Graphics and editing.</span>
        </SecondaryTitle>
        <SecondaryTitle>
          <Dot>•</Dot> <span id="u2619-10">Subtitling.</span>
        </SecondaryTitle>
        <SecondaryTitle>
          <Dot>•</Dot> <span id="u2619-14">Inserting sound effects.</span>
        </SecondaryTitle>
        <SecondaryTitle>
          <Dot>•</Dot> <span id="u2619-18">Composing music and songs.</span>
        </SecondaryTitle>
        <Summery>
          The significance of <NisTitel>NiS</NisTitel> is derived from the
          equipment and tools necessary for carrying out the artistic and
          technical tasks, which are applied to the image, in addition to the
          huge archive of sound effts, music and songs.
        </Summery>
   
    
    </Container>
  );
};

export default LeftSection;
