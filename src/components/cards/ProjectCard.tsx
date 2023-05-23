import { useState } from "react";
import { styled } from "styled-components";
import { CustomCardContainer } from "./CardContainer/Custom";
import "./style.css";
import { imageResponsive } from "../../responsive";
interface Props {
  id: number;
  url: string;
  title: string;
  onClick: (id: number) => void;
}
interface TitleContainerProps {
  display: boolean;
}

const Container = styled.div`
  &:hover {
    .hovererly {
      transform: (0.95);
    }
  }
  position: relative;
  width: 400px;
  height: 250px;
  ${imageResponsive({ width: "250px" , height:'217px' })}
`;
const TilteContainr = styled.div<TitleContainerProps>`
  width: 80%;
  height: 100%;
  background-color: rgba(28, 28, 28, 0.89);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  color: #f8f6e1;
  display: ${(props) => (props.display ? "grid" : "none")};
  transform: "translate(-50%, -50%)";
  align-items: center;
  position: absolute;
  left: 10%;
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
    <Container
      className="hovererly1"
      onMouseMove={handleHover}
      onMouseLeave={handleLeave}
    >
      <CustomCardContainer
        className="d-flex justify-content-center align-items-center hovererly"
        url={url}
        onClick={() => onClick(id)}
      />

      <TilteContainr display={showDiv}>
        <Title>{title}</Title>
      </TilteContainr>
    </Container>
  );
};
