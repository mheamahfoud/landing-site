
import PropTypes from "prop-types";
import { styled } from "styled-components";
import { desktop, laptop, mobile, smallMobile, tablet, xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../../../responsive";
const Container = styled.div`

  text-align: center;
  position: relative;
  text-align: center;
  color: #ffffff;
  background-color: transparent;
  font-family: raleway, sans-serif;
  font-weight: 400;
   margin: 10px 0;
 ${desktop({
  lineHeight: '58px',
  fontSize: '48px'
})}
 ${laptop({
  lineHeight: '58px',
  fontSize: '48px'
})}
   ${tablet({
  lineHeight: '58px',
  fontSize: '48px'
})}


${mobile({
  lineHeight: '43px',
  fontSize: '36px'
})}

${smallMobile({
  lineHeight: '43px',
  fontSize: '36px'
})}

${xSmallMobile({
  lineHeight: '36px',
  fontSize: '30px'
})}
${xXSmallMobile({
  lineHeight: '33px',
  fontSize: '22px'
})}
${xxxSmallMobile({
  lineHeight: '30px',
  fontSize: '20px'
})}
${xxxxSmallMobile({
  lineHeight: '24px',
  fontSize: '16px'
})}


`;
const Sentence = ({ text }) => {

  const firstChar = text?.charAt(0);
  return (
    <Container>
      <p style={{ color: "white" }}>
        <span style={{ color: "#F15722" }}>{firstChar}</span>
        {text?.substring(1)}
      </p>
    </Container>
  );
};

Sentence.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Sentence;
