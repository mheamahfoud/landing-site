import SocialLink from "../../../../components/buttons/social/socialLink";
import styled from "styled-components";
import { desktop, laptop, tablet } from "../../../../responsive";
const Container = styled.div`
  display : flex;
  gap:  15px;
  ${desktop({ gap:  '35px'})};
  ${laptop({ gap:  '35px'})};
  ${tablet({ gap:  '25px'})};
`;
export const SocialGroup = () => {
  return (
    <Container>
      <SocialLink name="facebook" url="https://www.facebook.com/nis.studio/" />
      <SocialLink
        name="instagram"
        url="https://www.instagram.com/nis_company/?hl=en"
      />
      <SocialLink name="twitter" url="https://twitter.com/NiS_Company" />
      <SocialLink
        name="youtube"
        url="https://www.youtube.com/user/newinteractivestudio"
      />
    </Container>
  );
};
