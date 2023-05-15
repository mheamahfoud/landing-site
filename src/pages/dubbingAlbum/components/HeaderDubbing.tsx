import React from "react";
import { styled } from "styled-components";
interface PropsStyle {
  url: string;
}
const Container = styled.div`
  position: relative;
  z-index: 2;
  height: 279px;
  background-color: #000000;
`;

const ImageContainer = styled.div<PropsStyle>`
  opacity: 1;
  background:url(${(props) => props.url}) no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;
export const HeaderDubbing = (props: PropsStyle) => {
  const { url } = props;
  return (
    <Container>
      <ImageContainer url={url}></ImageContainer>
    </Container>
  );
};
