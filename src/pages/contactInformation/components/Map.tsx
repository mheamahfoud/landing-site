import { styled } from "styled-components";
import { xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../../responsive";
const Container = styled.div`
  width: 100%;
  height: 400px;
  ${xXSmallMobile({
    height: "250px",
  })};
  ${xxxSmallMobile({
    height: "200px",
  })};
 ${xxxxSmallMobile({
    height: "200px",
  })}
`;

const EmbeddedMap = () => {
  return (
    <Container>
      <iframe
        title="Embedded Map"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: "0" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.0779610011063!2d31.199331215121642!3d30.04706468186568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s30.0470638%2C%2031.1993307!5e0!3m2!1sen!2suk!4v1621735216862!zoom=8"
        allowFullScreen
      ></iframe>
    </Container>
  );
};

export default EmbeddedMap;
