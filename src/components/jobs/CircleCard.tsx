import React, { useState } from "react";
import { styled } from "styled-components";
import { CardContainer } from "./CardAbum/CardAbumContainer";
import { CardCircleContainer } from "./CardAbum/CardCircleContainer";
interface Props {
  url: string;
  title:string
   
}
interface TitleContainerProps {
  display: boolean;
}
const TilteContainr = styled.div<TitleContainerProps>`
  width: 90%;
  height: 90%;
  background-color: rgba(28, 28, 28, 0.89);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  &:hover {
  }
  color: #f8f6e1;
  display: ${(props) => (props.display ? "grid" : "none")};
  transform: "translate(-50%, -50%)";
  align-items: center;
`;

const Title = styled.p`
  letter-spacing: 0px;
  font-size: 35px;
  text-align: center;
`;

export const CircleCard = (props: Props) => {
    const {title,url}=props;
  const [showDiv, setShowDiv] = useState(false);

  const handleHover = () => {
    setShowDiv(true);
  };

  const handleLeave = () => {
    setShowDiv(false);
  };
  return (
    <CardCircleContainer
      className="d-flex justify-content-center align-items-center rounded-circle"
      onMouseMove={handleHover}
      onMouseLeave={handleLeave}
      url={url}
    >
      <TilteContainr display={showDiv} className="rounded-circle">
        <Title>{title}</Title>
      </TilteContainr>
    </CardCircleContainer>
  );
};
