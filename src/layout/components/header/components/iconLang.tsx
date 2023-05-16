import "./iconLang.css";
import IconLAngImg from "../../../../assets/images/icon-languages.png";
import { styled } from "styled-components";
const Container = styled.div`
  z-index: 580;
  height: 44px;
  position: relative;
  top: 10px;
  margin: 0 20px;
  cursor: pointer;
`;

const ImageContainer = styled.img`
  border: 0px;
  border-style: solid;
  -webkit-transform-origin: left top;
  -ms-transform-origin: left top;
  -o-transform-origin: left top;
  transform-origin: left top;
`;
const IconLang = () => {
  return (
    <Container className="PamphletWidget clearfix">
      <ImageContainer src={IconLAngImg} />
    </Container>
  );
};
export default IconLang;
