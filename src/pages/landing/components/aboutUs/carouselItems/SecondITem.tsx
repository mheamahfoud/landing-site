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
 line-height: 23px;

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
export const SecondItem = () => {
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
              src="https://www.nistudio.net/images/about%20us-2.jpg?crc=142062504"
              data-widget-id="pamphletu1358"
            />
          </ImageCover>
        </ImageContainer>
        <VerticalLine />
        <Nis>NiS</Nis>{" "}
        <span>
          Among all the companies that work in the dubbing field, in the Arab
          world and the world at large,  <Nis>NiS</Nis>{" "} is remarkable with using
          cutting-edge techniques and software apps, especially those that serve
          administering and organizing the process of dubbing. In all NiS
          branches, our studios adopt an unconventional method through utilizing
          "Tazmeen System", which is one of its kind in the world of dubbing.
          The most prominent feature of "Tazmeen System" is its compatibility
          with all audio-editing softwares used globally.
        </span>
      </Paragraph>
      <p ></p>
      <Paragraph>
        The professional pride of  <Nis>NiS</Nis>{" "} stems from its well-organized
        administration environment, along with its work team, including the
        technical and administrative staff, who are extremely devoted to their
        work. Our staff enjoy no less than five-year experience extending to 12
        years, which embodies a typical example of the team spirit.
      </Paragraph>
    </Container>
  );
};
