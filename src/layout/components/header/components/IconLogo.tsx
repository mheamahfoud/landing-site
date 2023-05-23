import IconLogoImg from "../../../../assets/images/icon-logo.png";
import { styled } from "styled-components";
import {  smallMobileHeader } from "../responsive";
const Container = styled.div`
  cursor: pointer;
`;

const IConImage = styled.img`
  z-index: 511;
  width: 92px;
  height: 92px;
  position: relative;
  top: -15px;
  ${smallMobileHeader({width:'80px',height:'80px' , top :'-10px'})}
`;
const IconLogo = () => {
  return (
    <Container className="nonblock nontext ">
      <IConImage src={IconLogoImg}></IConImage>
    </Container>
  );
};
export default IconLogo;
