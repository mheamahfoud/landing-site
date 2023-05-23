import { FC } from "react";
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
} from "../../../../responsive";
const Container = styled.div`
  z-index: 88;
  min-height: 351px;
  color: #7f7f7f;

  ${desktop({ fontSize: "18px", lineHeight: "39px" })}
  ${laptop({ fontSize: "18px", lineHeight: "39px" })}
  ${tablet({ fontSize: "18px", lineHeight: "32px" })}
  ${mobile({ fontSize: "17px", lineHeight: "32px" })}
  ${smallMobile({ fontSize: "16px", lineHeight: "32px" })}
  ${xSmallMobile({ fontSize: "15px", lineHeight: "27px" })}
  ${xXSmallMobile({ fontSize: "14px", lineHeight: "27px" })}
  ${xxxSmallMobile({ fontSize: "12px", lineHeight: "27px" })}
  ${xxxxSmallMobile({ fontSize: "12px", lineHeight: "27px" })}
`;
const Nis = styled.span`
  color: #f15722;
`;
const Paragraph = styled.p`
  margin: 0;
  color: #7f7f7f;
`;
const Dot = styled.span`
  color: #f15722;
`;
const Right: FC = () => {
  return (
    <Container className="">
      <Paragraph>
        {" "}
        <Nis>Nis</Nis>{" "}
        <span id="u1790-2">
          {" "}
          offers services in the field of audio dubbing for all artistic works:
        </span>
      </Paragraph>
      <Paragraph>
        <span id="u1790-4">
          Drama, movies, documentaries, cartoon films… etc; transforming any
          original language into the following languages
        </span>{" "}
        <span id="u1790-6">and accents:</span>
      </Paragraph>
      <Paragraph>
        <Dot>• </Dot>
        <span id="u1790-9">Classical Arabic</span>
      </Paragraph>
      <Paragraph>
        <Dot>•</Dot> <span id="u1790-13">Syrian accent</span>
      </Paragraph>
      <Paragraph>
        <Dot>•</Dot> <span id="u1790-17">Egyptian Accent</span>
      </Paragraph>
      <Paragraph>
        <Dot>•</Dot> <span id="u1790-21">Turkish</span>
      </Paragraph>
      <Paragraph>
        <Dot>•</Dot> <span id="u1790-25">Persian</span>
      </Paragraph>
      <Paragraph>
        <Dot>•</Dot> <span id="u1790-29">Kurdish</span>
      </Paragraph>
    </Container>
  );
};

export default Right;
