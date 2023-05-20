import { styled } from "styled-components";
import imageBacground from '../../../assets/images/back-ground_footerr.png'
import Logo from "../../../components/logo";
import "./style.css";
import ContactInfo from "./components/ContactInfo";
import { SocialGroup } from "./components/SocialGroup";
import { CopyRight } from "./components/CopyRight";

import { ButtonLinkFadeIn } from "../../../components/buttons/normal/ButtonLinkFadeIn";
import { xxxSmallMobile, xxxxSmallMobile } from "../../../responsive";
const FooterStyle = styled.div`

  background-color: #000000;
  position: relative;
  z-index: 100;

`;

const Background = styled.div`
      opacity: 1;
    background: transparent url(${imageBacground}) no-repeat center center;
    background-size: cover;
`;

const Container = styled.div`
  ${xxxSmallMobile({ flexDirection: 'column', padding: '25px 0' })}
  ${xxxxSmallMobile({ flexDirection: 'column', padding: '25px 0' })}
`;

const ContainerButton = styled.div`
  gap: 35px;
`;

const ContainerMiddle = styled.div`
  gap: 70px;
  ${xxxSmallMobile({ gap: '40px' })}
`;


export const Footer = () => {
    return (
        <FooterStyle>
            <Background className="">
                <Container className="d-flex  flex-column justify-content-center  align-items-center h-100 ">
                    <Logo />
                    <ContactInfo />
                    <ContainerButton className="d-flex flex-column  align-items-center justify-content-evenly h-100">
                        <ButtonLinkFadeIn title={"Add your voice"} onClick={() => { }} />
                        <ButtonLinkFadeIn title={"Visit info"} onClick={() => { }} />
                        <ButtonLinkFadeIn title={"Nis Location"} onClick={() => { }} />
                    </ContainerButton>
                    <SocialGroup />

                    <CopyRight />

                </Container>
            </Background>
        </FooterStyle>
    );
};

