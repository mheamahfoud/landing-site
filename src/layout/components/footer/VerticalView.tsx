import { styled } from "styled-components";
import Logo from "../../../components/logo";
import "./style.css";
import ContactInfo from "./components/ContactInfo";
import { SocialGroup } from "./components/SocialGroup";
import { CopyRight } from "./components/CopyRight";

import { ButtonLinkFadeIn } from "../../../components/buttons/normal/ButtonLinkFadeIn";
import { xxxSmallMobile, xxxxSmallMobile } from "../../../responsive";


const Container = styled.div`
gap: 20px;
`;

const ContainerButton = styled.div`
   gap: 15px;
`;



export const VerticalView = () => {
  return (

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


  );
};

