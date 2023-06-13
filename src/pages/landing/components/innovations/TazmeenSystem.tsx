import { styled } from "styled-components";
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
  margin:0;
  font-size:1.5rem;
`;
const Paragraph = styled.p`
  margin: 0;
  text-indent: 5px;
  font-size:1.2rem;

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
      <Title className="fw-bolder">{intl.formatMessage({ id: 'tazmeen_system' })}</Title>
      {lang == 'ar' ?
        <Paragraph className="fw-normal">
          نظام حاسوبي مبتكر يساعد في إدارة عمليات الدوبلاج في الشركات التي لديها حجم عمل كبير وأستوديوهات متعددة حول العالم.
        </Paragraph>
        :
        <Paragraph className="fw-normal">
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
