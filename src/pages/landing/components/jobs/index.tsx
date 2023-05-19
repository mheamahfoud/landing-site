
import { styled } from "styled-components";
import CoverSkills from "../../../../assets/images/jobs-skills.png";
import { CardSkill } from "../../../../components/cards/CardSkill";

const Container = styled.div`
  height: 321px;
  background-color: #1c1c1c;
  margin: 20px 0;
  width: 100vw;
  white-space: nowrap;

`;
const Cover = styled.div`
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  filter: alpha(opacity=100);
  background: url(${CoverSkills}) no-repeat center center;
  height: 100%;
`;

const Top = styled.div`
  text-align: center;
  color: #000000;
  background-color: transparent;
  position: relative;
  font-family: roboto, sans-serif;
  font-weight: 400;
  min-height: 35px;
`;
const Paragraph = styled.p`
  line-height: 36px;
  font-size: 20px;
`;
const Bottom = styled.div``;

export const Jobs = () => {
  return (
    <Container>
      <Cover className="d-flex flex-column justify-content-evenly align-items-center">
        <Top>
          <Paragraph>
            <span style={{ color: "#F15722" }}>NiS</span>
            <span style={{ color: "#7F7F7F" }}>
              {" "}
              is proud that its production volume of dubbed works until the end
              of 2017 reached up to
            </span>
          </Paragraph>
        </Top>
        <Bottom className="d-flex flec-column">
          <CardSkill quantity={7500}>
            <p>Hours Of Drama Series</p>
            <p>(138 Projects)</p>
          </CardSkill>
          <CardSkill
            //skill={"Documentary Hours"}
            quantity={6000}
          >
            <p>Documentary Hours</p>
          </CardSkill>
          <CardSkill
            // skill={"Hours of TV cartoons(138 Projects)"}
            quantity={500}
          >
            <p>Hours of TV cartoons</p>
            <p>(138 Projects)</p>
          </CardSkill>
          <CardSkill
            //skill={"Film"}
            quantity={62}
          >
            <p>Film</p>
          </CardSkill>
        </Bottom>
      </Cover>
    </Container>
  );
};
