import React from "react";
import "./iconLogo.css";
import IconLogoImg from '../../../../assets/images/icon-logo.png'
const IconLogo = () => {
  return (
    <a className="nonblock nontext img-cotainer-link ">
      <img
        className="icon-logo"
        src={IconLogoImg}
      ></img>
    </a>
  );
};
export default IconLogo;
