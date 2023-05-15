import { styled } from "styled-components";
import SectionTitle from "../../../../components/titles/SectionTitle";
import "./style.css";
import { MainColor } from "../../../../helpers";
import LeftSection from "./LeftSection";
import { ImageContainer } from "./ImageContainer";
const NisTitel = styled.span`
  color: ${MainColor};
`;
const Container = styled.div``;

const Paragraph = styled.div`
  line-height: 24px;
  font-size: 20px;
  color: #2f2c24;
  line-height: 24px;
  font-weight: bold;
  margin:0 10px;
`;

const Music = styled.div`
  margin: 15px 0;
`;
const RightSection = () => {
  return (
    <Container className="d-flex flex-column  flex-fill-item">
      <Music className="d-flex flex-gap-item">
        <ImageContainer
          url="https://www.nistudio.net/images/music%20icone.png?crc=3837975431"
          title="Music"
        />
        <Paragraph>
          <NisTitel>NiS</NisTitel> performed soundtracks and music production
          for a large number of drama works; Syrian, Egyptian, Gulf and works
          with dubbing. The company has a cadre of professional musicians in
          this industry field.
        </Paragraph>
      </Music>
      <Music className="d-flex flex-gap-item">
        <ImageContainer
          url="https://www.nistudio.net/images/songs%20icone.png?crc=204213642"
          title="Songs"
        />
        <Paragraph >
          <NisTitel>NiS</NisTitel> recorded tens of songs, besides intro music
          for drama works and cartoon series.
        </Paragraph>
      </Music>
      <Music className="d-flex flex-gap-item">
        <ImageContainer
          url="https://www.nistudio.net/images/sfx%20icone.png?crc=211516958"
          title="SFX"
        />
        <Paragraph>
          <Paragraph>
            <NisTitel>NiS</NisTitel> possesses the largest world sound effect
            libraries, added to the libraries that are created inside{" "}
            <NisTitel>NiS</NisTitel>. It also has a professional team concerned
            with producing sound effects. The company had conducted tens of
            drama works, movies and cartoon series.
          </Paragraph>
        </Paragraph>
      </Music>
    </Container>
  );
};

export default RightSection;
