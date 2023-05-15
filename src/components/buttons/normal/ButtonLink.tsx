import { styled } from "styled-components";
const Container = styled.a`
  z-index: 439;
  width: 268px;
  max-height: 26px;
  background-color: #f15722;
  border-radius: 10px;
  text-align: center;
  font-family: roboto, sans-serif;
  font-weight: 400;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  cursor: pointer;
  &:hover  {
    font-size: 11px;
  }
`;

const Title = styled.p`
  text-align: center;
  color: #f8f6e1;
  background-color: #f15722;


`;
export const ButtonLink = ({ ...props }) => {
  const { title, onClick } = props;
  return (
    <Container
      className="nonblock nontext transition rounded-corners clearfix "
      onClick={onClick}
    >
      <Title>{title}</Title>
    </Container>
  );
};
