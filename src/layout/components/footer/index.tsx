import { styled } from "styled-components";

import Logo from "../../../components/logo";
import "./style.css";
import ContactInfo from "./components/ContactInfo";
import { SocialGroup } from "./components/SocialGroup";
import { CopyRight } from "./components/CopyRight";

import { ButtonLinkFadeIn } from "../../../components/buttons/normal/ButtonLinkFadeIn";
import { xxxSmallMobile } from "../../../responsive";
const FooterStyle = styled.div`

  background-color: #000000;
  position: relative;
  z-index: 100;

`;

const Container = styled.div`
  ${xxxSmallMobile({flexDirection:'column'})}
`;

const ContainerButton = styled.div`
  gap: 35px;
`;

const ContainerMiddle = styled.div`
  gap: 70px;
  ${xxxSmallMobile({ gap: '40px'})}
`;


export const Footer = () => {
  return (
    <FooterStyle>
      <div className="footer-bacground">
        <Container className="d-flex justify-content-around align-items-center h-100 ">
          <ContainerButton className="d-flex flex-column  align-items-center justify-content-evenly h-100">
            <ButtonLinkFadeIn title={"Add your voice"} onClick={() => {}} />
            <ButtonLinkFadeIn title={"Visit info"} onClick={() => {}} />
            <ButtonLinkFadeIn title={"Nis Location"} onClick={() => {}} />
          </ContainerButton>

          <ContainerMiddle className="d-flex flex-column justify-contetnt-between h-100 align-items-center">
            <Logo />
            <SocialGroup />
            <CopyRight />
          </ContainerMiddle>

          <ContactInfo />
        </Container>
      </div>
    </FooterStyle>
  );
};

