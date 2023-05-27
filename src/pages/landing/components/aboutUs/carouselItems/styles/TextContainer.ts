import styled from "styled-components";

export const ContainerText = styled.div`
  position: relative;
`;

export const TextP = styled.span`
  position: relative;
  z-index: 1;
  margin-right: 10px; /* Add margin between text and line */
   line-height:12px;

`;

export const VerticalLine = styled.span`
  width: 2px;
  height:200px;
  background-color: #f15722;
  position: absolute;
  right: 0;
  top: 0;
`;