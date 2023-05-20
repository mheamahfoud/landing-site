import { styled } from "styled-components";
import { desktop, laptop, mobile, smallMobile, tablet, xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../responsive";

const Container = styled.a`
  filter: alpha(opacity=100);
  opacity: 1;
  background: transparent
    url(https://www.nistudio.net/images/nis%20logo%20recip%20video.png?crc=3939961280)
    no-repeat center center;
  background-size: cover;
  cursor: pointer;
  ${desktop({width:'142px',height:'108px'})}
  ${laptop({width:'142px',height:'108px'})}
  ${tablet({width:'142px',height:'108px'})}
  ${mobile({width:'142px',height:'108px'})}
  ${smallMobile({width:'142px',height:'108px'})}

  ${xSmallMobile({width:'78px',height:'76px'})}
  ${xXSmallMobile({width:'78px',height:'76px'})}

  ${xxxSmallMobile({width:'89px',height:'86px'})}
  ${xxxxSmallMobile({width:'89px',height:'86px'})}

`;
const Logo = () => {
  return <Container className="nonblock nontext "></Container>;
};
export default Logo;
