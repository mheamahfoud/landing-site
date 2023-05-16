import { styled } from "styled-components";
import { ImageContainer } from "./ImageContainer";
import { MainColor } from "../../../../helpers";

import MusicCover from "../../../../assets/images/categories/coverphoto/music-cat.jpg";
import SongsCover from "../../../../assets/images/categories/coverphoto/songs-cat.jpg";
import SFXCover from "../../../../assets/images/categories/coverphoto/sfx-cat.jpg";

import MusicBackgroud from "../../../../assets/images/categories/background/music-back.png";
import SongsBackgroud from "../../../../assets/images/categories/background/song-back.png";
import SFXBackgroud from "../../../../assets/images/categories/background/sfx-back.png";

const Paragraph = styled.div`
  line-height: 24px;
  font-size: 20px;
  color: #2f2c24;
  line-height: 24px;
  font-weight: bold;
  margin: 0 10px;
`;
const NisTitel = styled.span`
  color: ${MainColor};
`;
export const paragraphs: { id: number, coverSrc:string , paragraph: React.ReactNode }[] = 
[
  {
    id: 1,
    coverSrc:MusicCover,
    paragraph: (
      <>
        <ImageContainer
          url={MusicBackgroud}
          title="Music"
        />
        <Paragraph>
          <NisTitel>NiS</NisTitel> performed soundtracks and music production
          for a large number of drama works; Syrian, Egyptian, Gulf and works
          with dubbing. The company has a cadre of professional musicians in
          this industry field.
        </Paragraph>
      </>
    ),
  },
  {
    id: 2,
    coverSrc:SongsCover,
    paragraph: (
      <>
        <ImageContainer
          url={SongsBackgroud}
          title="Songs"
        />
        <Paragraph>
          <NisTitel>NiS</NisTitel> recorded tens of songs, besides intro music
          for drama works and cartoon series.
        </Paragraph>
      </>
    ),
  },
  {
    id: 3,
    coverSrc:SFXCover,
    paragraph: (
      <>
        <ImageContainer
          url={SFXBackgroud}
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
      </>
    ),
  },
];