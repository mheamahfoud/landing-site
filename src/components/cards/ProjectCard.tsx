import  { useState } from "react";
import { styled } from "styled-components";
import { CustomCardContainer } from "./CardContainer/Custom";
interface Props {
  id: number;
  url: string;
  title: string;
  onClick: (id: number) => void;
}
interface TitleContainerProps {
  display: boolean;
}
const TilteContainr = styled.div<TitleContainerProps>`
  width: 80%;
  height: 320px;
  background-color: rgba(28, 28, 28, 0.89);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
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

export const ProjectCard = (props: Props) => {
  const { id, title, url, onClick } = props;
  const [showDiv, setShowDiv] = useState(false);

  const handleHover = () => {
    setShowDiv(true);
  };

  const handleLeave = () => {
    setShowDiv(false);
  };
  return (
    <CustomCardContainer
      className="d-flex justify-content-center align-items-center"
      onMouseMove={handleHover}
      onMouseLeave={handleLeave}
      url={url}
      onClick={() => onClick(id)}
    >
      <TilteContainr display={showDiv}>
        <Title>{title}</Title>
      </TilteContainr>
    </CustomCardContainer>
  );
};
