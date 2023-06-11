import { styled } from "styled-components";
import { ImageContainer } from "./ImageContainer";
import { MainColor } from "../../../../helpers";

import MusicCover from "../../../../assets/images/categories/coverphoto/music-cat.jpg";
import SongsCover from "../../../../assets/images/categories/coverphoto/songs-cat.jpg";
import SFXCover from "../../../../assets/images/categories/coverphoto/sfx-cat.jpg";

import MusicBackgroud from "../../../../assets/images/categories/background/music-back.png";
import SongsBackgroud from "../../../../assets/images/categories/background/song-back.png";
import SFXBackgroud from "../../../../assets/images/categories/background/sfx-back.png";
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
import { Categories } from "../../../../helpers/Constants";
import { getConfig } from "../../../../i18n/Metronici18n";

const Paragraph = styled.div`
  color: #2f2c24;
  font-weight: bold;
  margin: 0 10px;
  ${desktop({ fontSize: "20px", lineHeight: "24px" })}
  ${laptop({ fontSize: "20px", lineHeight: "24px" })}
  ${tablet({ fontSize: "20px", lineHeight: "24px" })}
  ${mobile({ fontSize: "17px", lineHeight: "20px" })}
  ${smallMobile({ fontSize: "17px", lineHeight: "20px" })}
  ${xSmallMobile({ fontSize: "16px", lineHeight: "19px" })}
  ${xXSmallMobile({ fontSize: "16px", lineHeight: "19px" })}
  ${xxxSmallMobile({ fontSize: "16px", lineHeight: "19px" })}
  ${xxxxSmallMobile({ fontSize: "16px", lineHeight: "19px" })}
`;
const NisTitel = styled.span`
  color: ${MainColor};
`;
export const paragraphs: {
  id: number;
  coverSrc: string;
  paragraph: React.ReactNode;
}[] = [
  {
    id: Categories.Music,
    coverSrc: MusicCover,
    paragraph: (
      <>
        <ImageContainer url={MusicBackgroud} title="music" />
        {getConfig().selectedLang == "ar" ? (
          <Paragraph>
            قامت شركة <NisTitel>NiS</NisTitel> بتنفيذ الموسيقى التصويرية
            والإعداد الموسيقي لعدد كبير من الأعمال الدرامية السورية والمصرية
            والخليجية والأعمال المدبلجة، ولدى شركتنا كادر من الموسيقين المحترفين
            في هذه الصناعة.
          </Paragraph>
        ) : (
          <Paragraph>
            قامت شركة <NisTitel>NiS</NisTitel> بتسجيل عشرات الأغاني والشارات
            للأعمال الدرامية ومسلسلات الرسوم المتحركة.
          </Paragraph>
        )}
      </>
    ),
  },
  {
    id: Categories.Songs,
    coverSrc: SongsCover,
    paragraph: (
      <>
        <ImageContainer url={SongsBackgroud} title="songs" />
        {getConfig().selectedLang == "ar" ? (
          <Paragraph>
            قامت شركة <NisTitel>NiS</NisTitel> بتنفيذ الموسيقى التصويرية
            والإعداد الموسيقي لعدد كبير من الأعمال الدرامية السورية والمصرية
            والخليجية والأعمال المدبلجة، ولدى شركتنا كادر من الموسيقين المحترفين
            في هذه الصناعة.
          </Paragraph>
        ) : (
          <Paragraph>
            <NisTitel>NiS</NisTitel> recorded tens of songs, besides intro music
            for drama works and cartoon series.
          </Paragraph>
        )}
      </>
    ),
  },
  {
    id: Categories.SFX,
    coverSrc: SFXCover,
    paragraph: (
      <>
        <ImageContainer url={SFXBackgroud} title="sfx" />
        {getConfig().selectedLang == "ar" ? (
          <Paragraph>
            <Paragraph>
              تمتلك شركة <NisTitel>NiS</NisTitel> كبرى مكتبات المؤثرات الصوتية
              العالمية والمكتبات المصنعة من قبلها، ولديها كادر محترف في صناعة
              المؤثرات الصوتية. وقد نفذت الشركة عشرات الأعمال الدرامية والأفلام
              ومسلسلات الرسوم المتحركة.
            </Paragraph>
          </Paragraph>
        ) : (
          <Paragraph>
            <Paragraph>
              <NisTitel>NiS</NisTitel> possesses the largest world sound effect
              libraries, added to the libraries that are created inside{" "}
              <NisTitel>NiS</NisTitel>. It also has a professional team
              concerned with producing sound effects. The company had conducted
              tens of drama works, movies and cartoon series.
            </Paragraph>
          </Paragraph>
        )}
      </>
    ),
  },
];
