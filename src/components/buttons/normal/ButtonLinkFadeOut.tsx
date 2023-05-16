import { styled } from "styled-components";
const Container = styled.a`
  width: 200px;
  height: 30px;
  background-color: #f15722;
  border-radius: 12px;
  text-align: center;
  font-family: roboto, sans-serif;
  font-weight: 400;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  cursor: pointer;
  &:hover p {
    font-size: larger;
    /* Example: change the text color to red */
  }
`;

const Title = styled.p`
  text-align: center;
  color: #f8f6e1;
  background-color: #f15722;
`;
export const ButtonLinkFadeOut = ({ ...props }) => {
  const { title, onClick } = props;
  return (
    <Container
      className="d-inline-flex justify-content-center align-items-center"
      onClick={onClick}
    >
      <Title>{title}</Title>
    </Container>
  );
};
