import { styled } from "styled-components";
import Image from "./assset/item-2.jpg";
import { ImageContainer, ImageCover, ImageText } from "./styles/ImageContainer";
import {
  middleFont,
  xSmallMobile,
  xXSmallMobile,
  xmiddleFont,
  xxxSmallMobile,
  xxxxSmallMobile,
} from "../../../../../responsive";
import { useLang } from "../../../../../i18n/Metronici18n";
const Nis = styled.span`
  color: #f15722;
`;
const Container = styled.div`
  height: 100%;
  z-index: 164;
  min-height: 415px;
  background-color: transparent;
  color: #7f7f7f;
  font-size: 17px;
  position: relative;
  ${middleFont({ fontSize: "14px" })}
  ${xmiddleFont({ fontSize: "17px" })}
  ${xSmallMobile({ fontSize: "15px" })}
  ${xXSmallMobile({ fontSize: "14px" })}
  ${xxxSmallMobile({
    fontSize: "13px",
    display: "flex",
    flexDirection: "column",
  })}
  ${xxxxSmallMobile({
    fontSize: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  })}
`;
const Paragraph = styled.p`
  line-height: 23px;
  ${xxxSmallMobile({ lineHeight: "15px" })}
  ${xxxxSmallMobile({ lineHeight: "12px" })}
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

export const SecondItem = () => {
  const lang = useLang();
  return (
    <Container>
      <Paragraph>
        <ImageContainer>
          <ImageCover>
            <ImageText src={Image} />
          </ImageCover>
        </ImageContainer>
        <ContainerText>
          <Text>
            {lang == "ar" ? (
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                }}
              >
                <span className="">
                  تحتل شركة NiS مكانتها كواحدة من أكبر الشركات العاملة في مجال
                  صناعة الدوبلاج في الوطن العربي لجودة عملها، والتزامها بمواعيد
                  التسليم، ومنافستها بالسعر.
                </span>
                <span className="d-flex mt-2">
                  تتميز شركة NiS عن شركات الدبلجة في الوطن العربي والعالم
                  باستخدامها لتقنيات برمجية مبتكرة في إدارة وتنظيم عملية
                  الدوبلاج، حيث تعمل أستوديوهات الشركة بكافة فروعها بطريقة غير
                  تقليدية من خلال استخدامها "نظام تزمين" الفريد من نوعه في عالم
                  الدوبلاج، والذي يتوافق مع جميع برامج التسجيل المعتمدة عالمياً.
                </span>
              </span>
            ) : (
              <span>
                Among all the companies that work in the dubbing field, in the
                Arab world and the world at large, <Nis>NiS</Nis> is remarkable
                with using cutting-edge techniques and software apps, especially
                those that serve administering and organizing the process of
                dubbing. In all NiS branches, our studios adopt an
                unconventional method through utilizing "Tazmeen System", which
                is one of its kind in the world of dubbing. The most prominent
                feature of "Tazmeen System" is its compatibility with all
                audio-editing softwares used globally.
              </span>
            )}
          </Text>
          {/* <VerticalLine /> */}
        </ContainerText>
      </Paragraph>
      <p></p>
      {lang == "ar" ? (
        <Paragraph
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            lineHeight: "32px",
          }}
        >
          تفخر شركة NiS ببيئتها الإدارية المنظّمة وبفريق عملها من الفنيين
          والإداريين والتقنيين المحترفين والمتفانين في عملهم، وبخبراتهم التي لا
          تقل عن خمس سنوات وتصل إلى إثني عشرة سنة، والذين يجسّدون بعملهم نموذجاً
          لروح الفريق.
        </Paragraph>
      ) : (
        <Paragraph>
          The professional pride of <Nis>NiS</Nis> stems from its well-organized
          administration environment, along with its work team, including the
          technical and administrative staff, who are extremely devoted to their
          work. Our staff enjoy no less than five-year experience extending to
          12 years, which embodies a typical example of the team spirit.
        </Paragraph>
      )}
    </Container>
  );
};
