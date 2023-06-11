import { styled } from "styled-components";
import { MainColor } from "../../../helpers";
import { xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../../responsive";
import { useLang } from "../../../i18n/Metronici18n";
const Title = styled.p`
    font-size: 48px;
    line-height: 58px;
    color: #7F7F7F;
    position: relative;
    font-family: raleway, sans-serif;
    z-index: 6;
    font-weight: 900;

    ${xSmallMobile({ fontSize: '38px', lineHeight: '46px' })}
    ${xXSmallMobile({ fontSize: '38px', lineHeight: '46px' })}
    ${xxxSmallMobile({ fontSize: '25px', lineHeight: '36px' })}
    ${xxxxSmallMobile({ fontSize: '25px', lineHeight: '36px' })}
`;
const StyleWord = styled.span`
    color: ${MainColor};
`;
export const TitleForm = () => {
  const lang = useLang();

  return (
    <>
      {lang == 'ar' ?
        <Title>
          بيانات{"  "}
          <StyleWord>الز</StyleWord>ائر
        </Title>


        : <Title>
          <StyleWord>V</StyleWord>isitor{"  "}
          <StyleWord>I</StyleWord>nformation
        </Title>}
    </>


  );
}

export default TitleForm;
