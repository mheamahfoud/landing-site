
import PropTypes from "prop-types";
import { styled } from "styled-components";
const Container = styled.div`
  width: 614px;
  min-height: 80px;
  line-height: 58px;
  font-size: 48px;
  text-align: center;
  position: relative;
  text-align: center;
  color: #ffffff;
  background-color: transparent;
  font-family: raleway, sans-serif;
  z-index: 34;
  font-weight: 400;
  margin: 10px 0;
`;
const Sentence = ({ text }) => {
  const firstChar = text.charAt(0);
  return (
    <Container>
      <p style={{ color: "white" }}>
        <span style={{ color: "#F15722" }}>{firstChar}</span>
        {text.substring(1)}
      </p>
    </Container>
  );
};

Sentence.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Sentence;
