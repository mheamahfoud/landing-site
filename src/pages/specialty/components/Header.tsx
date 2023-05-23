import { styled } from "styled-components";
const Container = styled.div`
  position: relative;
  z-index: 2;
  height: 279px;
  background-color: #000000;
`;

const ImageContainer = styled.div`
  opacity: 1;
  background-size: cover;
  width: 100%;
  height: 100%;
`;
export const Header = () => {
  return (
    <Container>
      <ImageContainer></ImageContainer>
    </Container>
  );
};
