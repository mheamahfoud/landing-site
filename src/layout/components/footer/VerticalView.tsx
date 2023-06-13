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
import { useIntl } from "react-intl";

const Container = styled.div`
  gap: 20px;
`;

const ContainerButton = styled.div`
  gap: 15px;
`;

export const VerticalView = () => {
  const intl=useIntl();
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
        <ButtonLinkFadeIn
         title={intl.formatMessage({id:"add_your_voice"})}
          url={"https://forms.gle/H5VgoDQQqySeieWB6"}
        />
        <ButtonLinkFadeIn title={intl.formatMessage({id:"visit_info"})} onClick={handleClick} />
        <ButtonLinkFadeIn  title={intl.formatMessage({id:"nis_location"})}onClick={handleLocation} />
      </ContainerButton>
      <SocialGroup />

      <CopyRight />
    </Container>
  );
};
