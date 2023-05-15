import { styled } from "styled-components";
import { ButtonLink } from "../../../components/buttons/normal/ButtonLink";
import Logo from "../../../components/logo";
import "./style.css";
import ContactInfo from "./components/ContactInfo";
import { SocialGroup } from "./components/SocialGroup";
import { CopyRight } from "./components/CopyRight";
import React from "react";
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
          <div className="first-footer-content">
            <ButtonLink title={"Add your voice"} onClick={() => {}} />
            <ButtonLink title={"Visit info"} onClick={() => {}} />
            <ButtonLink title={"Nis Location"} onClick={() => {}} />
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
