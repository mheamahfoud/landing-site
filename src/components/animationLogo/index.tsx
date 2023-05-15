import { styled } from "styled-components";
import AnimateIConLOgo from '../../assets/images/animate-con-logo.png'
const Container = styled.img`
  filter: alpha(opacity=100);
  opacity: 1;
  position: relative;
  background-size: cover;
  width: 258px;
  height: 258px;
`;
const AnimationLogo = () => {
  return (
    <Container src={AnimateIConLOgo}></Container>
  );
};
export default AnimationLogo;
