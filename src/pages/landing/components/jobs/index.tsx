
import { styled } from "styled-components";
import CoverSkills from "../../../../assets/images/jobs-skills.png";
import { CardSkill } from "../../../../components/cards/CardSkill";
import { useIntl } from "react-intl";
import { useLang } from "../../../../i18n/Metronici18n";
import ARParagraph from "./ARParagraph";
import ENParagraph from "./ENParagraph";

const Container = styled.div`
 
  background-color: #1c1c1c;
  white-space: nowrap;
  position: relative;

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
  white-space: break-spaces;
  padding: 20px 20px;
`;
const Bottom = styled.div``;

export const Jobs = () => {
  const intl=useIntl();
  const lang=useLang();
  return (
    <Container>
      <Cover className="d-flex flex-column justify-content-evenly align-items-center">
        <Top>
          <Paragraph>
           {
            lang=='ar' ? <ARParagraph/> : <ENParagraph/>
           }
          </Paragraph>
        </Top>
        <Bottom className="d-flex justify-content-center align-items-center flex-wrap gap-4">
          <div className="d-flex justify-content-center align-items-center gap-4">
          <CardSkill quantity={11000}>
            <p style={{ margin: '0px' }}>{intl.formatMessage({id:'hours_Of_drama_series'})}</p>
            <p style={{ margin: '0px' }}>(138 {intl.formatMessage({id:'projects'})})</p>
          </CardSkill>
          <CardSkill
            //skill={"Documentary Hours"}
            quantity={7000}
          >
            <p style={{ margin: '0px' }}>{intl.formatMessage({id:'documentry_hours'})}</p>
          </CardSkill>
          </div>
       
          <div className="d-flex justify-content-center align-items-center gap-4">
            <CardSkill
              // skill={"Hours of TV cartoons(138 Projects)"}
              quantity={3000}
            >
              <p style={{ margin: '0px' }}>{intl.formatMessage({id:'hours_Of_tv_cartoon'})}</p>
              <p style={{ margin: '0px' }}>(138 {intl.formatMessage({id:'projects'})})</p>
            </CardSkill>
            <CardSkill
              //skill={"Film"}
              quantity={250}
            >
              <p>{intl.formatMessage({id:'film'})}</p>
            </CardSkill>
          </div>


        </Bottom>
      </Cover>
    </Container>
  );
};
