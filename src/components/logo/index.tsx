import { styled } from "styled-components";

const Container = styled.a`
  filter: alpha(opacity=100);
  opacity: 1;
  background: transparent
    url(https://www.nistudio.net/images/nis%20logo%20recip%20video.png?crc=3939961280)
    no-repeat center center;
  background-size: cover;
  cursor: pointer;
  width: 142px;
  height: 108px;
`;
const Logo = () => {
  return <Container className="nonblock nontext "></Container>;
};
export default Logo;
