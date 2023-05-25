import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "bootstrap/dist/css/bootstrap.min.css";
import { socialLinkColors } from "../../../helpers";

import styled from "styled-components";

import { desktop, laptop, mobile, smallMobile, tablet, xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile, } from "../../../responsive";

library.add(faFacebookF, faInstagram, faTwitter, faYoutube, faCircle);
const Container = styled.a`
  text-align: center;
  border-radius: 100px;
  cursor: pointer;
  :hover {
    color: white;
  }
  background-color: ${(props) => socialLinkColors[props.color]};
 
  ${desktop({
  width: "40px",
  minHeight: "40px",
  zIndex: "489"
})}
    ${laptop({
  width: "40px",
  minHeight: "40px",
  zIndex: "489"
})}
    ${tablet({
  width: "38px",
  minHeight: "40px",
  zIndex: "489"
})}
      ${mobile({
  width: "39px",
  minHeight: "40px",
  zIndex: "489"
})}

${smallMobile({
  width: "39px",
  minHeight: "40px",
  zIndex: "489"
})}

${xSmallMobile({
  width: "39px",
  minHeight: "40px",
  zIndex: "489"
})}
 ${xXSmallMobile({
  width: "25px",
  minHeight: "25px",
  zIndex: "489"
})}
${xxxSmallMobile({
  width: "25px",
  minHeight: "25px",
  zIndex: "489"
})}
${xxxxSmallMobile({
  width: "25px",
  minHeight: "25px",
  zIndex: "489"
})}

`;

const SocialLink = ({ name, url }) => {
  let icon;
  switch (name.toLowerCase()) {
    case "facebook":
      icon = <FontAwesomeIcon icon={["fab", "facebook-f"]} />;
      break;
    case "instagram":
      icon = (
        <FontAwesomeIcon
          icon={["fab", "instagram"]}
          style={{ width: "20px", height: "20px" }}
        />
      );
      break;
    case "twitter":
      icon = <FontAwesomeIcon icon={["fab", "twitter"]} />;
      break;
    case "youtube":
      icon = <FontAwesomeIcon icon={["fab", "youtube"]} />;
      break;
    default:
      icon = <FontAwesomeIcon icon={["fas", "circle"]} />;
  }

  return (
    <Container
      href={url}
      target="_blank"
      color={name}
      className={`nonblock nontext transition rounded-corners d-flex justify-content-center align-items-center clearfix`}
    >
      {icon}
    </Container>
  );
};

SocialLink.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SocialLink;
