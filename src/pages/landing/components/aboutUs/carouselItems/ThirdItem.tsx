import React from "react";
import { styled } from "styled-components";
const Nis = styled.span`
  color: #f15722;
`;
const Container = styled.div`
  z-index: 164;
  min-height: 415px;
  background-color: transparent;
  color: #7f7f7f;
  font-size: 17px;
  position: relative;
`;
const Paragraph = styled.p`
  line-height: 27px;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 10px;
  margin: 0;
`;

const ImageContainer = styled.span`
  float: right;
  padding: 2px;
`;

const ImageCover = styled.span`
  border-style: solid;
  border-color: #f15722;
  background-color: transparent;
  border-radius: 25px 0px 25px 25px;
  border-width: 2px 0px 0px 2px;
  overflow: hidden;
  display: block;
`;

const VerticalLine = styled.span`
  z-index: 180;
  width: 2px;
  height: 197px;
  background-color: #f15722;
  position: absolute;
  left: 395px;
`;

export const ThirdItem = () => {
  return (
    <Container>
      <Paragraph>
        <ImageContainer>
          <ImageCover>
            <img
              className="block"
              id="u566393_img"
              alt=""
              width="387"
              height="232"
              data-muse-src="images/about%20us-1.jpg?crc=293713022"
              src="https://www.nistudio.net/images/about%20us-3.jpg?crc=67194214"
              data-widget-id="pamphletu1358"
            />
          </ImageCover>
        </ImageContainer>
        <VerticalLine />
        <Nis>NiS</Nis>{" "}
        <span>
          has done more than 13 thousand hours of dubbing with different
          variations: movies, drama series, documentaries and cartoon films.
          Those works have been screened on the most important TV channels in
          the Arab world.
        </span>
      </Paragraph>
      <Paragraph>
        Extra services offerd by <Nis>NiS</Nis> :
      </Paragraph>
      <Paragraph>
        - Post-production services; editing, graphics, colour correction.
      </Paragraph>
      <Paragraph>- Recording and inserting sound effects.</Paragraph>
      <Paragraph>- Music composition.</Paragraph>
      <Paragraph>- Audio mixing, with the 5.1 technique.</Paragraph>
      <Paragraph>- Electronic translation</Paragraph>.
    </Container>
  );
};
