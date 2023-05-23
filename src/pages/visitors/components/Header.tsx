import { styled } from "styled-components";
import { xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../../responsive";
interface PropsStyle {
  url: string;
}
const Container = styled.div`
  position: relative;
  z-index: 2;
  height: 279px;
  background-color: #000000;

${xXSmallMobile({
    height: "200px",
})}
 ${xxxSmallMobile({
    height: "180px",
})}
 ${xxxxSmallMobile({
    height: "100px",
})}
`;

const ImageContainer = styled.div<PropsStyle>`
  opacity: 1;
  background:url(${(props) => props.url}) no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  opacity: 0.56;
`;
export const Header= (props: PropsStyle) => {
  const { url } = props;
  return (
    <Container>
      <ImageContainer url={url}></ImageContainer>
    </Container>
  );
};
