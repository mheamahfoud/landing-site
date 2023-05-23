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
  @media ((min-width: ${size.xss}) and (max-width: 640px)) {
    ${inner};
  }
`;

export const xxxSmallMobile = (inner: any) => css`
  @media ((min-width: ${size.xsss}) and (max-width: 568px)) {
    ${inner};
  }
`;
export const xxxxSmallMobile = (inner: any) => css`
  @media ((max-width: 400px)) {
    ${inner};
  }
`;

export const middleFont = (inner: any) => css`
  @media ((max-width: 864px)) {
    ${inner};
  }
`;

export const xmiddleFont = (inner: any) => css`
  @media ((min-width: 865px)) {
    ${inner};
  }
`;

export const middleColumn = (inner: any) => css`
  @media ((max-width: 1201px)) {
    ${inner};
  }
`;
export const xMiddleColumn = (inner: any) => css`
  @media ((min-width: 1200px)) {
    ${inner};
  }
`;

export const tabletColumn = (inner: any) => css`
  @media ((max-width: 1200px)) {
    ${inner};
  }
`;

export const mobileFontSize = (inner: any) => css`
  @media ((max-width: 769px)) {
    ${inner};
  }
`;

export const vedioResponsive = (inner: any) => css`
  @media ((max-width: 860px)) {
    ${inner};
  }
`;

export const imageResponsive = (inner: any) => css`
  @media ((max-width: 1250px)) {
    ${inner};
  }
`;

export const imageResponsive1 = (inner: any) => css`
  @media ((min-width: 1100px)) {
    ${inner};
  }
`;