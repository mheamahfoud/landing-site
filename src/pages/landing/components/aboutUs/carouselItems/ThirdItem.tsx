import { styled } from "styled-components";
import Image from "./assset/item-3.jpg";
import { ImageContainer, ImageCover, ImageText } from "./styles/ImageContainer";
import {
  xxxSmallMobile,
  xxxxSmallMobile,
} from "../../../../../responsive";
import {  useLang } from "../../../../../i18n/Metronici18n";
import { useIntl } from "react-intl";
const Nis = styled.span`
  color: #f15722;
`;
interface Props {
  lang: "en" | "ar";
}
const Container = styled.div<Props>`

  height: 100%;
  z-index: 164;
  min-height: 415px;
  background-color: transparent;
  color: #7f7f7f;

  position: relative;
  width: 100%;
  font-weight: ${(props) => (props.lang == "ar" ? "bold" : "")};


 
  ${xxxSmallMobile({
    display: "flex",
    flexDirection: "column",
  })}
  ${xxxxSmallMobile({
    display: "flex",
    flexDirection: "column",
  })}
`;
const Paragraph = styled.p`
  padding-right: 10px;
  padding-left: 10px;
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
  const lang = useLang();
  const intl = useIntl();
  return (
    <Container lang={lang} className="fs-md-3 fs-sm-6 fs-xs-8">
      <Paragraph>
        <ImageContainer>
          <ImageCover>
            <ImageText src={Image} />
          </ImageCover>
        </ImageContainer>

        <ContainerText>
          <Text>
            {lang == 'ar' ? (
              <span>
                قامت شركة <Nis>NiS</Nis> بتنفيذ ما يزيد عن 13000 ساعة دوبلاج
                متنوعة من الأفلام السينمائية والمسلسلات الدرامية والأفلام
                الوثائقية وأفلام الرسوم المتحركة، وقد عرضت هذه الأعمال على أهم
                القنوات الفضائية في العالم العربي.
              </span>
            ) : (
              <span>
                <Nis>NiS</Nis> has done more than 13 thousand hours of dubbing
                with different variations: movies, drama series, documentaries
                and cartoon films. Those works have been screened on the most
                important TV channels in the Arab world.
              </span>
            )}
          </Text>
          {/* <VerticalLine /> */}
        </ContainerText>
      </Paragraph>
      <Paragraph>
        {intl.formatMessage({ id: "extra_services_offerd_by" })} <Nis>NiS</Nis>{" "}
        :
      </Paragraph>
      <Paragraph>
        - {intl.formatMessage({ id: "post_production_services" })}:{" "}
        {intl.formatMessage({ id: "editing" })},{" "}
        {intl.formatMessage({ id: "graphics" })},{" "}
        {intl.formatMessage({ id: "colour_correction" })}.
      </Paragraph>
      <Paragraph>
        -{intl.formatMessage({ id: "recording_and_inserting_sound_effects" })}{" "}
      </Paragraph>
      <Paragraph>- {intl.formatMessage({ id: "music_composition" })}</Paragraph>
      <Paragraph>
        - {intl.formatMessage({ id: "audio_mixing" })},
        {intl.formatMessage({ id: "with_5_technique" })}{" "}
      </Paragraph>
      <Paragraph>
        - {intl.formatMessage({ id: "electronic_translation" })}
      </Paragraph>
    </Container>
  );
};
