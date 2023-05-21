import { desktop, laptop, mobile, smallMobile, tablet, xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from '../../../../responsive';
import './VerticalSentence.css'
import { styled } from 'styled-components';
const Container = styled.div`
   position: absolute;
   left: 10%;

`;

const Paragraph  = styled.div`
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%) rotate(-90deg);
  transform-origin: center center; 
  white-space: nowrap; 
letter-spacing: 10px;
  font-weight: 900;
  color: white;
  opacity: 0.54;

  ${desktop({fontSize: '20px',lineHeight: '24px', width:'440px'})}
  ${laptop({fontSize: '20px',lineHeight: '24px', width:'440px'})}
  ${tablet({fontSize: '16px',lineHeight: '19px', width:'440px'})}
  ${mobile({fontSize: '16px',lineHeight: '19px', width:'400px'})}
  ${smallMobile({fontSize: '16px',lineHeight: '19px', width:'400px',  letterSpacing: '8px'})}

  ${xSmallMobile({fontSize: '15px',lineHeight: '19px', width:'400px',  letterSpacing: '8px'})}
  ${xXSmallMobile({fontSize: '15px',lineHeight: '19px', width:'323px',  letterSpacing: '6px'})}
  ${xxxSmallMobile({fontSize: '12px',lineHeight: '14px', width:'243px',  letterSpacing: '4px'})}
  ${xxxxSmallMobile({fontSize: '12px',lineHeight: '14px', width:'177px',  letterSpacing: '2px'})}

`;
const VerticalSentence = () => {
    return (

        <Container>
            <Paragraph
     
            >
                New{" "}
                <span  style={{ color: "#F15722" }}>
                    Interactive
                </span>{" "}
                Studio
            </Paragraph>
        </Container>
    );
}

export default VerticalSentence;
