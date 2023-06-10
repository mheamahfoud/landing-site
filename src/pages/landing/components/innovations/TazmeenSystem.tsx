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
import { MainColor } from "../../../../helpers";
import { useIntl } from "react-intl";
import { useLang } from "../../../../i18n/Metronici18n";
const Container = styled.div`
  height: fit-content;
  border: solid;
  text-align: center;
  background-color: transparent;
  position: relative;
  color: #7f7f7f;
  border-style: solid;
  border-color: #f15722;
  border-width: 1px;
  padding: 5px;
`;
const Title = styled.p`
  ${desktop({ fontSize: "28px", lineHeight: "34px", fontWeight: "bold" })}
  ${laptop({ fontSize: "26px", lineHeight: "31px", fontWeight: "bold" })}
  ${tablet({ fontSize: "22px", lineHeight: "26px", fontWeight: "bold" })}
  ${mobile({ fontSize: "16px", lineHeight: "21px", fontWeight: "bold" })}
  margin:0;
`;
const Paragraph = styled.p`
  margin: 0;
  text-indent: 5px;
  ${desktop({ fontSize: "20px", lineHeight: "20px" })}
  ${laptop({ fontSize: "16px", lineHeight: "21px" })}
  ${tablet({ fontSize: "16px", lineHeight: "19px" })}
  ${mobile({ fontSize: "14px", lineHeight: "14px" })}
  ${smallMobile({ fontSize: "14px", lineHeight: "14px" })}
  ${xSmallMobile({ fontSize: "10px", lineHeight: "12px" })}
  ${xXSmallMobile({ fontSize: "10px", lineHeight: "12px" })}
  ${xxxSmallMobile({ fontSize: "10px", lineHeight: "12px" })}
  ${xxxxSmallMobile({ fontSize: "10px", lineHeight: "12px" })}
`;

const Link = styled.a`
  color: #7f7f7f;
  font-size: 24px;
  text-decoration: none;
  &:hover {
    color:${MainColor}
  }
`;
export const TazmeenSystem = () => {
  const intl = useIntl();
  const lang = useLang();
  return (
    <Container>
      <Title>{intl.formatMessage({ id: 'tazmeen_system' })}</Title>
      {lang == 'ar' ?
        <Paragraph>
          نظام حاسوبي مبتكر يساعد في إدارة عمليات الدوبلاج في الشركات التي لديها حجم عمل كبير وأستوديوهات متعددة حول العالم.
        </Paragraph>
        :
        <Paragraph>
          Is an innovative software based solution to manage the voice dubbing and
          localization operations. Tazmeen System is the ultimate support for the
          main dubbing industry global players, especially companies with multiple
          studios around the world, to serve all available languages.
        </Paragraph>


      }
      <Paragraph>
        <Link
          href="http://www.tazmeen.com"
          target="_blank"
        >
          <span >www.tazmeen.com</span>
        </Link>
      </Paragraph>
    </Container>
  );
};
