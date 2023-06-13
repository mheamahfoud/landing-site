import { styled } from "styled-components";
import { ButtonLinkFadeOut } from "../../../../components/buttons/normal/ButtonLinkFadeOut";
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
  font-size:1.5rem;
`;
const Paragraph = styled.p`
  text-indent: 5px;
  margin: 0;
  font-size:1.2rem;
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
      <Title className="fw-bolder">{intl.formatMessage({ id: 'voice_library' })}</Title>
      {lang == 'ar' ? <Paragraph className="fw-normal">تمتلك الشركة مكتبة ضخمة من أصوات الممثلين.
      </Paragraph > :
        <Paragraph className="fw-normal">Our company owns a huge library of actors voices.</Paragraph>}
      <div style={{ margin: '10px 0' }}>
        <ButtonLinkFadeOut title={intl.formatMessage({ id: 'add_your_voice' })} url={'https://forms.gle/H5VgoDQQqySeieWB6'} />
      </div>
      <div style={{ margin: '10px 0' }}>
        <ButtonLinkFadeOut title={intl.formatMessage({ id: 'nis_specialties' })} onClick={handleSpecialty} />
      </div>
    </Container>
  );
};
