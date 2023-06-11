import { FC } from "react";
import { styled } from "styled-components";
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
import { useIntl } from "react-intl";
import { useLang } from "../../../../i18n/Metronici18n";
const Container = styled.div`
  z-index: 88;
  min-height: 351px;
  color: #7f7f7f;

  ${desktop({ fontSize: "18px", lineHeight: "39px" })}
  ${laptop({ fontSize: "18px", lineHeight: "39px" })}
  ${tablet({ fontSize: "18px", lineHeight: "32px" })}
  ${mobile({ fontSize: "17px", lineHeight: "32px" })}
  ${smallMobile({ fontSize: "16px", lineHeight: "32px" })}
  ${xSmallMobile({ fontSize: "15px", lineHeight: "27px" })}
  ${xXSmallMobile({ fontSize: "14px", lineHeight: "27px" })}
  ${xxxSmallMobile({ fontSize: "12px", lineHeight: "27px" })}
  ${xxxxSmallMobile({ fontSize: "12px", lineHeight: "27px" })}
`;
const Nis = styled.span`
  color: #f15722;
`;
const Paragraph = styled.p`
  margin: 0;
  color: #7f7f7f;
`;
const Dot = styled.span`
  color: #f15722;
`;
const Right: FC = () => {
  const intl = useIntl();
  const lang = useLang();
  return (
    <Container className="">
      {lang == "ar" ? (
        <Paragraph>
          تقدم شركة <Nis>Nis</Nis>{" "}
          <span> خدماتها في مجال الدوبلاج لجميع الأعمال الفنية:</span>
        </Paragraph>
      ) : (
        <Paragraph>
          <Nis>Nis</Nis>{" "}
          <span >
            offers services in the field of audio dubbing for all artistic   works:
          
          </span>
        </Paragraph>
      )}
      {lang == "ar" ? (
        <Paragraph>
          <span>
            (الدراما - الأفلام السينمائية - الأفلام الوثائقية - الرسوم المتحركة
            .. وغيرها) من أي لغة في العالم إلى اللغات واللهجات التالية:
          </span>
        </Paragraph>
      ) : (
        <Paragraph>
          <span>
            Drama, movies, documentaries, cartoon films… etc; transforming any
            original language into the following languages and accents:
          </span>
        </Paragraph>
      )}
      <Paragraph>
        <Dot>• </Dot>
        <span>{intl.formatMessage({id:'classical_arabic'})}</span>
      </Paragraph>
      <Paragraph>
        <Dot>•</Dot> <span>{intl.formatMessage({id:'syrian_accent'})} </span>
      </Paragraph>
      <Paragraph>
        <Dot>•</Dot> <span>{intl.formatMessage({id:'egyptian_accent'})}</span>
      </Paragraph>
      <Paragraph>
        <Dot>•</Dot> <span>{intl.formatMessage({id:'turkish'})} </span>
      </Paragraph>
      <Paragraph>
        <Dot>•</Dot> <span>{intl.formatMessage({id:'persian'})}</span>
      </Paragraph>
      <Paragraph>
        <Dot>•</Dot> <span>{intl.formatMessage({id:'kurdish'})}</span>
      </Paragraph>
    </Container>
  );
};

export default Right;
