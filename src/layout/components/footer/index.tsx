import { styled } from "styled-components";

import Logo from "../../../components/logo";
import "./style.css";
import ContactInfo from "./components/ContactInfo";
import { SocialGroup } from "./components/SocialGroup";
import { CopyRight } from "./components/CopyRight";

import { ButtonLinkFadeIn } from "../../../components/buttons/normal/ButtonLinkFadeIn";
const FooterStyle = styled.div`
  height: 328px;
  background-color: #000000;
  position: relative;
  z-index: 100;
`;
export const Footer = () => {
  return (
    <FooterStyle>
      <div className="footer-bacground">
        <div className="footer-container">
          <div className="d-flex flex-column  align-items-center justify-content-evenly h-100">
            <ButtonLinkFadeIn title={"Add your voice"} onClick={() => {}} />
            <ButtonLinkFadeIn title={"Visit info"} onClick={() => {}} />
            <ButtonLinkFadeIn title={"Nis Location"} onClick={() => {}} />
          </div>

          <div className="middle-footer-content">
            <Logo />
            <SocialGroup />
            <CopyRight />
          </div>

          <ContactInfo />
        </div>
      </div>
    </FooterStyle>
  );
};
