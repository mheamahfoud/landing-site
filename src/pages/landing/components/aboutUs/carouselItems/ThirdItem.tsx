import { styled } from "styled-components";
import Image from './assset/item-3.jpg';
import { ImageContainer, ImageCover, ImageText } from "./styles/ImageContainer";
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
  width: 100%;
`;
const Paragraph = styled.p`
  line-height: 27px;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 10px;
  margin: 0;
`;



const ContainerText = styled.div`
  position: relative;
`;

const Text = styled.span`
  position: relative;
  z-index: 1;
  margin-right: 10px; /* Add margin between text and line */


`;

// const VerticalLine = styled.span`
//   width: 2px;
//   height:200px;
//   background-color: #f15722;
//   position: absolute;
//   right: 0;
//   top: 0;
// `;


export const ThirdItem = () => {
  return (
    <Container>
      <Paragraph>
        <ImageContainer>
          <ImageCover>
            <ImageText

              src={Image}

            />
          </ImageCover>
        </ImageContainer>

        <ContainerText>
          <Text>
            <span>
              has done more than 13 thousand hours of dubbing with different
              variations: movies, drama series, documentaries and cartoon films.
              Those works have been screened on the most important TV channels in
              the Arab world.
            </span>

          </Text>
          {/* <VerticalLine /> */}
        </ContainerText>

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
