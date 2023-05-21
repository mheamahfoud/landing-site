import { styled } from "styled-components";
import { useMediaQuery } from 'react-responsive';

import imageBacground from '../../../assets/images/back-ground_footerr.png'
import Logo from "../../../components/logo";
import "./style.css";
import ContactInfo from "./components/ContactInfo";
import { SocialGroup } from "./components/SocialGroup";
import { CopyRight } from "./components/CopyRight";

import { ButtonLinkFadeIn } from "../../../components/buttons/normal/ButtonLinkFadeIn";
import { xxxSmallMobile, xxxxSmallMobile } from "../../../responsive";
import { useEffect, useState } from "react";
import { VerticalView } from "./VerticalView";

const FooterStyle = styled.div`

  background-color: #000000;
  position: relative;
  z-index: 100;

`;

const Background =styled.div`
      opacity: 1;
    background: transparent url(${imageBacground}) no-repeat center center;
    background-size: cover;
`;

const Container = styled.div`
  ${xxxSmallMobile({flexDirection:'column', padding:'25px 0'})}
  ${xxxxSmallMobile({flexDirection:'column' , padding:'25px 0'})}
`;

const ContainerButton = styled.div`
  gap: 35px;
`;

const ContainerMiddle = styled.div`
  gap: 70px;
  ${xxxSmallMobile({ gap: '40px'})}
`;


export const Footer = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 549 });

  return (
    <FooterStyle>
      <Background className="">
     { !isSmallScreen  ?   <Container className="d-flex justify-content-around align-items-center h-100 ">
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
        </Container> : <VerticalView/>}
      </Background>
    </FooterStyle>
  );
};

