import React from "react";
import { styled } from "styled-components";
import Image from './assset/item-1.jpg'
import { ImageContainer, ImageCover } from "./styles/ImageContainer";
import { ContainerText, TextP, VerticalLine } from "./styles/TextContainer";
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




export const FirstItem = () => {
  return (
    <Container>
      <Paragraph>

        <ImageContainer>
          <ImageCover>
            <img
              src={Image}
            />
          </ImageCover>
        </ImageContainer>
        <ContainerText>
          <TextP>
            <span>
              <Nis>NiS</Nis> was established in 2003.&nbsp; It specializes in the
              industry field of dubbing and audio services for all genres of
              artistic works; i.e. movies, drama series, documentaries, cartoon
              films, commercial ads, computer games … etc. Our company works on the
              dubbing process, transforming the audio tracks from their original
              languages into classical Arabic and to some other Arabic dialects.
            </span>
          </TextP>
          <VerticalLine />


        </ContainerText>

      </Paragraph>
      <p></p>
      <Paragraph>
        in addition to post-production services; like video editing, colour
        correction, graphical editing of the footage ... etc.
      </Paragraph>
      <p></p>
      <Paragraph>
        <Nis>NiS</Nis> seizes one of the top ranks among rival companies, which
        work in the industry field of dubbing in the Arab world, simply due to
        its distinguished quality of output, compliance with the deadline for
        delivery and competing prices.
      </Paragraph>
    </Container>
  );
};
