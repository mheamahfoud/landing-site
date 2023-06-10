import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";

import imageBacground from "../../../assets/images/back-ground_footerr.png";
import Logo from "../../../components/logo";
import "./style.css";
import ContactInfo from "./components/ContactInfo";
import { SocialGroup } from "./components/SocialGroup";
import { CopyRight } from "./components/CopyRight";

import { ButtonLinkFadeIn } from "../../../components/buttons/normal/ButtonLinkFadeIn";
import { xxxSmallMobile, xxxxSmallMobile } from "../../../responsive";
import { VerticalView } from "./VerticalView";
import { useNavigate } from "react-router-dom";
import { ContactInfoPath, VisitorInfoPath } from "../../../routing/RouteNames";
import VisitorInfoSrc from "../../../assets/images/innovations/visitor-information.jpg";
import ContactInfoSrc from "../../../assets/images/contact-info.png";
import { useIntl } from "react-intl";

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
  ${xxxSmallMobile({ flexDirection: "column", padding: "25px 0" })}
  ${xxxxSmallMobile({ flexDirection: "column", padding: "25px 0" })}
  margin-left: 0;
  margin-right: 0;
`;

const ContainerButton = styled.div`
gap: 35px;
`;

const ContainerMiddle = styled.div`
  gap: 70px;
  ${xxxSmallMobile({ gap: "40px" })}
`;

export const Footer = () => {
  const intl=useIntl();
  const isSmallScreen = useMediaQuery({ maxWidth: 549 });
  const navigate = useNavigate();
  // const handleClick = useCallback(() => {
  //   navigate(VisitorInfoPath, {
  //     state: { url: VisitorInfoSrc},
  //   });
  // }, []);

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
    <section id="contact-us">
    <FooterStyle>
      <Background className="">
        {!isSmallScreen ? (
          <Container className="row  h-100 ">
            <div className="col-4">
              <ContainerButton className="d-flex flex-column  align-items-end justify-content-center h-100">
                <ButtonLinkFadeIn
                  title={intl.formatMessage({id:"add_your_voice"})}
                  url={"https://forms.gle/H5VgoDQQqySeieWB6"}
                />
                <ButtonLinkFadeIn title={intl.formatMessage({id:"visit_info"})} onClick={handleClick} />
                <ButtonLinkFadeIn
                  title={intl.formatMessage({id:"nis_location"})}
                  onClick={handleLocation}
                />
              </ContainerButton>
            </div>
            <div className="col-4 text-center">
              <ContainerMiddle className="d-flex flex-column justify-contetnt-between h-100 align-items-center">
                <Logo />
                <SocialGroup />
                <CopyRight />
              </ContainerMiddle>
            </div>
            <div className="col-4 d-flex  align-items-center" >
              <ContactInfo />
            </div>
          </Container>
        ) : (
          <VerticalView />
        )}
      </Background>
    </FooterStyle>
    </section>
  );
};
