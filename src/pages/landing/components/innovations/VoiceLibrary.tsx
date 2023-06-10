import { styled } from "styled-components";
import { ButtonLinkFadeOut } from "../../../../components/buttons/normal/ButtonLinkFadeOut";

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
import { useCallback } from "react";
import { NisSepcialtyPath } from "../../../../routing/RouteNames";
import { useNavigate } from "react-router-dom";
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
  margin: 0;
  ${desktop({ fontSize: "28px", lineHeight: "34px", fontWeight: "bold" })}
  ${laptop({ fontSize: "26px", lineHeight: "31px", fontWeight: "bold" })}
  ${tablet({ fontSize: "22px", lineHeight: "26px", fontWeight: "bold" })}
  ${mobile({ fontSize: "16px", lineHeight: "21px", fontWeight: "bold" })}
`;
const Paragraph = styled.p`
  text-indent: 5px;
  margin: 0;
  ${desktop({ fontSize: "20px", lineHeight: "20px" })}
  ${laptop({ fontSize: "16px", lineHeight: "21px" })}
  ${tablet({ fontSize: "16px", lineHeight: "19px" })}
  ${mobile({ fontSize: "16px", lineHeight: "21px" })}
  ${smallMobile({ fontSize: "14px", lineHeight: "14px" })}
  ${xSmallMobile({ fontSize: "10px", lineHeight: "12px" })}
  ${xXSmallMobile({ fontSize: "10px", lineHeight: "12px" })}
  ${xxxSmallMobile({ fontSize: "10px", lineHeight: "12px" })}
  ${xxxxSmallMobile({ fontSize: "10px", lineHeight: "12px" })}
`;
export const VoiceLibrary = () => {
  const intl = useIntl();
  const lang = useLang();
  const navigate = useNavigate();
  const handleSpecialty = useCallback(() => {
    navigate(NisSepcialtyPath, {
    });
  }, []);
  return (
    <Container>
      <Title>{intl.formatMessage({ id: 'voice_library' })}</Title>
      {lang == 'ar' ? <Paragraph>تمتلك الشركة مكتبة ضخمة من أصوات الممثلين.
      </Paragraph> :
        <Paragraph>Our company owns a huge library of actors voices.</Paragraph>}
      <div style={{ margin: '10px 0' }}>
        <ButtonLinkFadeOut title={intl.formatMessage({ id: 'add_your_voice' })} url={'https://forms.gle/H5VgoDQQqySeieWB6'} />
      </div>
      <div style={{ margin: '10px 0' }}>
        <ButtonLinkFadeOut title={intl.formatMessage({ id: 'nis_specialties' })} onClick={handleSpecialty} />
      </div>
    </Container>
  );
};
