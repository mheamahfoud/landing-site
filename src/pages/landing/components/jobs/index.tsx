
import { styled } from "styled-components";
import CoverSkills from "../../../../assets/images/jobs-skills.png";
import { CardSkill } from "../../../../components/cards/CardSkill";
import { desktop, laptop, mobile, smallMobile, tablet, xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../../../responsive";
import { useIntl } from "react-intl";
import { useLang } from "../../../../i18n/Metronici18n";
import ARParagraph from "./arParagraph";
import ENParagraph from "./enParagraph";

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
  ${desktop({ fontSize: '20px', lineHeight: '36px' })}
  ${laptop({ fontSize: '20px', lineHeight: '36px' })}
  ${tablet({ fontSize: '16px', lineHeight: '29px' })}
  ${mobile({ fontSize: '14px', lineHeight: '25px' })}
  ${smallMobile({ fontSize: '14px', lineHeight: '25px' })}
  ${xSmallMobile({ fontSize: '14px', lineHeight: '25px' })}
  ${xXSmallMobile({ fontSize: '14px', lineHeight: '25px' })}
  ${xxxSmallMobile({ fontSize: '14px', lineHeight: '25px' })}
  ${xxxxSmallMobile({ fontSize: '14px', lineHeight: '25px' })}
 
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
        <Bottom className="d-flex justify-content-center align-items-center flex-wrap">
          <div className="d-flex justify-content-center align-items-center ">
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
       
          <div className="d-flex justify-content-center align-items-center ">
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
