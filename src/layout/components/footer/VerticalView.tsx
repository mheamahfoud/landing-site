import { styled } from "styled-components";
import Logo from "../../../components/logo";
import "./style.css";
import ContactInfo from "./components/ContactInfo";
import { SocialGroup } from "./components/SocialGroup";
import { CopyRight } from "./components/CopyRight";

import { ButtonLinkFadeIn } from "../../../components/buttons/normal/ButtonLinkFadeIn";
import { useNavigate } from "react-router-dom";
import { ContactInfoPath, VisitorInfoPath } from "../../../routing/RouteNames";
import VisitorInfoSrc from "../../../assets/images/innovations/visitor-information.jpg";
import ContactInfoSrc from "../../../assets/images/contact-info.png";


const Container = styled.div`
gap: 20px;
`;

const ContainerButton = styled.div`
   gap: 15px;
`;



export const VerticalView = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(VisitorInfoPath, {
      state: { url: VisitorInfoSrc },
    });
  }
  const handleLocation = () => {
    navigate(ContactInfoPath, {
      state: { url: ContactInfoSrc },
    });
  };

  return (

    <Container className="d-flex  flex-column justify-content-center  align-items-center h-100 ">
      <Logo />
      <ContactInfo />
      <ContainerButton className="d-flex flex-column  align-items-center justify-content-evenly h-100">
        <ButtonLinkFadeIn title={"Add your voice"} onClick={()=>{}} />
        <ButtonLinkFadeIn title={"Visit info"} onClick={handleClick} />
        <ButtonLinkFadeIn title={"Nis Location"} onClick={handleLocation} />
      </ContainerButton>
      <SocialGroup />

      <CopyRight />

    </Container>


  );
};

