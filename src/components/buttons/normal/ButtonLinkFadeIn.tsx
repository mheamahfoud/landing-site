import { styled } from "styled-components";
import {
  desktop,
  laptop,
  mobile,
  smallMobile,
  tablet,
  xSmallMobile,
  xXSmallMobile,
  xxxSmallMobile,
  xxxxSmallMobile,
} from "../../../responsive";
const Container = styled.a`
  ${desktop({ width: "273px", height: "24px" })}
  ${laptop({ width: "273px", height: "24px" })}
${tablet({ width: "273px", height: "24px" })}

${mobile({ width: "201px", height: "20px" })}
${smallMobile({ width: "201px", height: "20px" })}

${xSmallMobile({ width: "190px", height: "22px" })}
${xXSmallMobile({ width: "140px", height: "20px" })}
${xxxSmallMobile({ width: "129px", height: "20px" })}
${xxxxSmallMobile({ width: "129px", height: "20px" })}
 text-decoration: none;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  display: block;
  cursor: pointer;
  &:hover p {
    font-size: smaller;
    /* Example: change the text color to red */
  }
`;

const Title = styled.p`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera, and Firefox */


background-color: #f15722;
  border-radius: 10px;
  text-align: center;
  font-family: roboto, sans-serif;
  font-weight: 400;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #f8f6e1;
  background-color: #f15722;
  margin: 0;
`;
export const ButtonLinkFadeIn = ({ ...props }) => {
  const { title, onClick, url } = props;
  return (
    <Container
      target="_blank"
      className="d-inline-flex justify-content-center align-items-center"
      href={url}
      onClick={(event) => {
        if (!url) {
          event.preventDefault();
          onClick();
        }
      }}
    >
      <Title>{title}</Title>
    </Container>
  );
};
