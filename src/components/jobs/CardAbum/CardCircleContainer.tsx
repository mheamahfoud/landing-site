import React from "react";
import { styled } from "styled-components";
type Props = {
  url: string;
};
export const CardCircleContainer = styled.div<Props>`
  width: 320px;
  height: 320px;
  filter: alpha(opacity=100);
  background-color: #f8f6e1;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  cursor: pointer;
  box-shadow: inset 3px 3px 4px rgba(255, 255, 255, 0.75),
    inset -3px -3px 4px rgba(0, 0, 0, 0.75);
  //background-image: url(https://www.nistudio.net/images/poster%20cartoon-u1081854-fr.png?crc=325150193);
  background-image:url(${(props) => props.url}) ;
  &:hover {
    transform: scale(0.9);
  }
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`;

