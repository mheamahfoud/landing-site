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
  background-color: #f15722;
  border-radius: 10px;
  text-align: center;
  font-family: roboto, sans-serif;
  font-weight: 400;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  display: block;

  cursor: pointer;
  &:hover p {
    font-size: larger;
    /* Example: change the text color to red */
  }
  ${desktop({ width: "200px", height: "26px" })}
  ${laptop({ width: "200px", height: "26px" })}
  ${tablet({ width: "200px", height: "24px" })}
  ${mobile({ width: "160px", height: "26px" })}
  ${smallMobile({ width: "160px", height: "26px" })}
  ${xSmallMobile({ width: "160px", height: "26px" })}
  ${xXSmallMobile({ width: "160px", height: "26px" })}
  ${xxxSmallMobile({ width: "120px", height: "19px", fontSize: "12px" })}
  ${xxxxSmallMobile({ width: "120px", height: "19px", fontSize: "12px" })}
`;

const Title = styled.p`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera, and Firefox */

  text-align: center;
  color: #f8f6e1;
  background-color: #f15722;
  display: contents;
`;
export const ButtonLinkFadeOut = ({ ...props }) => {
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
