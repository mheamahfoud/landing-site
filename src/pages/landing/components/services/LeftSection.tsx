import { styled } from "styled-components";
import SectionTitle from "../../../../components/titles/SectionTitle";
import "./style.css";
import { MainColor } from "../../../../helpers";
import { useIntl } from "react-intl";
import { useLang } from "../../../../i18n/Metronici18n";
const Container = styled.div`

`;
const NisTitel = styled.span`
  color: ${MainColor};
`;
const Dot = styled.span`
  color: ${MainColor};
`;
//Left
const MainTitle = styled.p`
  margin: 0;
  font-size: 1.1rem;
`;
const SecondaryTitle = styled.p`
  margin: 0;
  font-size: 1rem;
`;
const Summery = styled.p`
  color: #7f7f7f;
  padding-top: 27px;
  font-size: 1.1rem;
`;

//end lf

const LeftSection = () => {
  const intl = useIntl();
  const lang = useLang();
  return (
    <Container className="flex-fill-item fw-bold">
      <SectionTitle
        title={intl.formatMessage({ id: "services" })}
        sectionNumber="04"
      />
      <MainTitle className="fw-bold">
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
        <Summery className="fw-bold">
          حيث تمتلك شركة <NisTitel>NiS</NisTitel> التجهيزات والمعدات اللازمة
          للعمليات الفنية على الصورة بالإضافة إلى مكتبة ضخمة من المؤثرات الصوتية
          والموسيقى والأغاني.
        </Summery>
      ) : (
        <Summery className="fw-bold">
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
