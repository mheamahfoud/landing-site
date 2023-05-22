import { css } from "styled-components";
const size = {
    xsss: "401px",
    xss: "569px",
    xs: "641px",
    xxsm: "769px",
    xsm: "865px",
    sm: "961px",
    md: "1201px",
    lg: "1301px",
  };
export const mobileHeader = (inner: any) => css`
  @media ((min-width: ${size.xxsm}) and (max-width: 1200px)) {
    ${inner};
  }
`;

export const smallMobileHeader = (inner: any) => css`
  @media ((min-width: ${size.xsss}) and (max-width: 768px)) {
    ${inner};
  }
`;