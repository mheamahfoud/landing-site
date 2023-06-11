import { styled } from "styled-components";
import SectionTitle from "../../../../components/titles/SectionTitle";
import "./style.css";
import { MainColor } from "../../../../helpers";
import { useIntl } from "react-intl";
import { useLang } from "../../../../i18n/Metronici18n";
const Container = styled.div``;
const NisTitel = styled.span`
  color: ${MainColor};
`;
const Dot = styled.span`
  color: ${MainColor};
`;

//Left
const MainTitle = styled.p`
  line-height: 32px;
  font-weight: bold;
  margin: 0;
`;
const SecondaryTitle = styled.p`
  line-height: 22px;
  margin: 0;
`;
const Summery = styled.p`
  line-height: 27px;
  color: #7f7f7f;
  font-family: raleway, sans-serif;
  padding-top: 27px;
  font-weight: 900;
`;

//end lf

const LeftSection = () => {
  const intl = useIntl();
  const lang = useLang();
  return (
    <Container className="flex-fill-item">
      <SectionTitle
        title={intl.formatMessage({ id: "services" })}
        sectionNumber="04"
      />
      <MainTitle>
        {lang == "ar" ? (
          <span>
            {" "}
            تقدم شركة <NisTitel>NiS</NisTitel> خدماتها في مجال:
          </span>
        ) : (
          <>
            <NisTitel>NiS</NisTitel>
            <span> offers serves in the following fields:</span>
          </>
        )}
      </MainTitle>
      <SecondaryTitle>
        <Dot>•</Dot>{" "}
        <span>{intl.formatMessage({ id: "graphics_and_editing" })} </span>
      </SecondaryTitle>
      <SecondaryTitle>
        <Dot>•</Dot> <span>{intl.formatMessage({ id: "subtitling" })}</span>
      </SecondaryTitle>
      <SecondaryTitle>
        <Dot>•</Dot>{" "}
        <span>{intl.formatMessage({ id: "inserting_sound_effects" })}</span>
      </SecondaryTitle>
      <SecondaryTitle>
        <Dot>•</Dot>{" "}
        <span>{intl.formatMessage({ id: "composing_music_and_songs" })}</span>
      </SecondaryTitle>

      {lang == "ar" ? (
        <Summery>
          حيث تمتلك شركة <NisTitel>NiS</NisTitel> التجهيزات والمعدات اللازمة
          للعمليات الفنية على الصورة بالإضافة إلى مكتبة ضخمة من المؤثرات الصوتية
          والموسيقى والأغاني.
        </Summery>
      ) : (
        <Summery>
          The significance of <NisTitel>NiS</NisTitel> is derived from the
          equipment and tools necessary for carrying out the artistic and
          technical tasks, which are applied to the image, in addition to the
          huge archive of sound effts, music and songs.
        </Summery>
      )}
    </Container>
  );
};

export default LeftSection;
