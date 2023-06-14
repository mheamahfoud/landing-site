import { styled } from "styled-components";
import Image from "./assset/item-1.jpg";
import { ImageContainer, ImageCover, ImageText } from "./styles/ImageContainer";
import { ContainerText, TextP } from "./styles/TextContainer";
import {
  xxxSmallMobile,
  xxxxSmallMobile,
} from "../../../../../responsive";
import { useLang } from "../../../../../i18n/Metronici18n";

const Nis = styled.span`
  color: #f15722;
`;
const Paragraph = styled.p`
  line-height: 23px;
  margin: 0;
`;

const ContainerItem = styled.div`
  height: 100%;
  z-index: 164;
  min-height: 415px;
  background-color: transparent;
  color: #7f7f7f;
  position: relative;

  ${xxxSmallMobile({
    display: "flex",
    flexDirection: "column",
  })}
  ${xxxxSmallMobile({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  })}
`;

export const FirstItem = () => {
  const lang = useLang();
  return (
    <ContainerItem className="fs-md-4 fs-sm-6 ">
      <ImageContainer>
        <ImageCover>
          <ImageText src={Image} />
        </ImageCover>
      </ImageContainer>
      <Paragraph>
        <ContainerText>
          <TextP>
            {lang == "ar" ? (
              <span className="fw-bolder ">
                {" "}
                تأسست شركة <Nis>NiS</Nis> في عام 2003 كشركة متخصصة في صناعة
                الدوبلاج والخدمات الصوتية لجميع الأعمال الفنية: "الأفلام
                السينمائية - المسلسلات الدرامية – الأفلام الوثائقية – أفلام
                الرسوم المتحركة – الإعلانات – ألعاب الكومبيوتر .. إلخ"، حيث تعمل
                الشركة على دبلجتها من لغاتها الأصلية إلى اللغة العربية الفصحى و
                إلى بعض اللهجات العربية.
              </span>
            ) : (
              <span>
                <Nis>NiS</Nis> was established in 2003.&nbsp; It specializes in
                the industry field of dubbing and audio services for all genres
                of artistic works; i.e. movies, drama series, documentaries,
                cartoon films, commercial ads, computer games … etc. Our company
                works on the dubbing process, transforming the audio tracks from
                their original languages into classical Arabic and to some other
                Arabic dialects.
              </span>
            )}
          </TextP>
          {/* <VerticalLine /> */}
        </ContainerText>
      </Paragraph>
      <p></p>
      {lang == "ar" ? (
        <>
          <Paragraph className="fw-bolder">
            بالإضافة إلى خدمات ما بعد الإنتاج للفيديو: "المونتاج – تصحيح الألوان
            – العمليات الفنية على الصورة .. إلخ".
          </Paragraph>
        </>
      ) : (
        <>
          <Paragraph >
            in addition to post-production services; like video editing, colour
            correction, graphical editing of the footage ... etc.
          </Paragraph>
          <p></p>
          <Paragraph>
            <Nis>NiS</Nis> seizes one of the top ranks among rival companies,
            which work in the industry field of dubbing in the Arab world,
            simply due to its distinguished quality of output, compliance with
            the deadline for delivery and competing prices.
          </Paragraph>
        </>
      )}
    </ContainerItem>
  );
};
