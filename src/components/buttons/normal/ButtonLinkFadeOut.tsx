import { styled } from "styled-components";
import { desktop, laptop, mobile, smallMobile, tablet, xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../../responsive";
const Container = styled.a`
  background-color: #f15722;
  border-radius: 12px;
  text-align: center;
  font-family: roboto, sans-serif;
  font-weight: 400;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  cursor: pointer;
  &:hover p {
    font-size: larger;
    /* Example: change the text color to red */
  }
  ${desktop({ width:'200px',height: '26px' })}
  ${laptop({ width:'200px',lineHeight: '26px' })}
  ${tablet({ width:'200px',lineHeight: '24px' })}
  ${mobile({ width:'160px',lineHeight: '26px' })}
  ${smallMobile({ width:'160px',lineHeight: '26px' })}
  ${xSmallMobile({ width:'160px',lineHeight: '26px' })}
  ${xXSmallMobile({ width:'160px',lineHeight: '26px' })}
  ${xxxSmallMobile({ width:'120px',lineHeight: '19px' })}
  ${xxxxSmallMobile({ width:'120px',lineHeight: '19px' })}

`;

const Title = styled.p`
  text-align: center;
  color: #f8f6e1;
  background-color: #f15722;
  margin:0;
`;
export const ButtonLinkFadeOut = ({ ...props }) => {
  const { title, onClick } = props;
  return (
    <Container
      className="d-inline-flex justify-content-center align-items-center"
      onClick={onClick}
    >
      <Title>{title}</Title>
    </Container>
  );
};
