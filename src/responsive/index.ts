import { css } from "styled-components";

const size = {
  xs: "641px",
  xxsm: "769px",
  xsm: "865px",
  sm: "961px",
  md: "1201px",
  lg: "1301px",
};

export const desktop = (inner: any) => css`
  @media (min-width: ${size.lg}) {
    ${inner};
  }
`;

export const laptop = (inner: any) => css`
  @media ((min-width: ${size.md}) and (max-width: 1300px)) {
    ${inner};
  }
`;

export const tablet = (inner: any) => css`
  @media ((min-width: ${size.sm}) and (max-width: 1200px)) {
    ${inner};
  }
`;

export const mobile = (inner: any) => css`
  @media ((min-width: ${size.xsm}) and (max-width: 960px)) {
    ${inner};
  }
`;

export const smallMobile = (inner: any) => css`
  @media ((min-width: ${size.xxsm}) and (max-width: 864px)) {
    ${inner};
  }
`;

export const xSmallMobile = (inner: any) => css`
  @media ((min-width: ${size.xs}) and (max-width: 768px)) {
    ${inner};
  }
`;

export const xXSmallMobile = (inner: any) => css`
  @media ((max-width: 768px)) {
    ${inner};
  }
`;
