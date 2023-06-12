import { styled } from "styled-components";
import AnimateIConLOgo from '../../assets/images/animate-con-logo.png'
import { desktop, laptop, mobile, smallMobile, tablet, xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../responsive";
const Container = styled.img`
  filter: alpha(opacity=100);
  opacity: 1;
  position: relative;
  background-size: cover;

  ${desktop({width: '258px',height: '258px'})}
  ${laptop({width: '258px',height: '258px'})}
  ${tablet({width: '200px',height: '200px'})}
  ${mobile({width: '175px',height: '175px'})}
  ${smallMobile({width: '160px',height: '160px'})}
  ${xSmallMobile({width: '160px',height: '160px'})}
  ${xXSmallMobile({width: '125px',height: '125px'})}
  ${xxxSmallMobile({width: '125px',height: '125px'})}
  ${xxxxSmallMobile({width: '125px',height: '125px'})}
`;
const AnimationLogo = () => {
  return (
    <Container src={AnimateIConLOgo}></Container>
  );
};
export default AnimationLogo;
