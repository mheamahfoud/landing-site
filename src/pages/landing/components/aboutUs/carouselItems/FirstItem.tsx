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
  display: flex;
`;
const Paragraph = styled.p`
  line-height: 23px;
  margin: 0;
`;

const ImageContainer = styled.span`
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
export const FirstItem = () => {
  return (
    <Container>
      <Paragraph>
        <span>
          {" "}
          <Nis>NiS</Nis> was established in 2003.&nbsp; It specializes in the
          industry field of dubbing and audio services for all genres of
          artistic works; i.e. movies, drama series, documentaries, cartoon
          films, commercial ads, computer games … etc. Our company works on the
          dubbing process, transforming the audio tracks from their original
          languages into classical Arabic and to some other Arabic dialects.
        </span>
        <ImageContainer>
          <ImageCover>
            <img
              className="block"
              id="u566393_img"
              alt=""
              width="387"
              height="232"
              data-muse-src="images/about%20us-1.jpg?crc=293713022"
              src="https://www.nistudio.net/images/about%20us-1.jpg?crc=293713022"
              data-widget-id="pamphletu1358"
            />
          </ImageCover>
        </ImageContainer>



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
