import { styled } from "styled-components";
import {
  desktop,
  laptop,
  mobile,
  smallMobile,
  tablet,
  xSmallMobile,
  xXSmallMobile,
  xxxSmallMobile,
  xxxxSmallMobile,
} from "../../../../responsive";
const Container = styled.div`
  height: fit-content;
  border: solid;
  text-align: center;
  background-color: transparent;
  position: relative;
  color: #7f7f7f;
  border-style: solid;
  border-color: #f15722;
  border-width: 1px;
`;
const Title = styled.p`
margin:0;
  
  ${desktop({ fontSize: "28px", lineHeight: "34px",fontWeight: 'bold' })}
  ${laptop({ fontSize: "26px", lineHeight: "31px",fontWeight: 'bold'  })}
  ${tablet({ fontSize: "22px", lineHeight: "26px",fontWeight: 'bold'  })}
  ${mobile({ fontSize: "16px", lineHeight: "21px" ,fontWeight: 'bold' })}

`;
const Paragraph = styled.p`
margin:0;
  ${desktop({ fontSize:'20px',lineHeight: '20px' })}
  ${laptop({ fontSize:'16px',lineHeight: '21px' })}
  ${tablet({ fontSize:'16px',lineHeight: '19px' })}
  ${mobile({ fontSize:'16px',lineHeight: '21px' })}
  ${smallMobile({ fontSize:'14px',lineHeight: '14px' })}
  ${xSmallMobile({ fontSize:'10px',lineHeight: '12px' })}
  ${xXSmallMobile({ fontSize:'10px',lineHeight: '12px' })}
  ${xxxSmallMobile({ fontSize:'10px',lineHeight: '12px' })}
  ${xxxxSmallMobile({ fontSize:'10px',lineHeight: '12px' })}
  text-indent: 5px;
`;
export const NISSFX = () => {
  return (
    <Container>
      <Title>NiS SFX</Title>
      <Paragraph>
        Is a software solution that helps is easly, instantly and precisly
        implement the required Sound Effects (SFX).
      </Paragraph>
    </Container>
  );
};
