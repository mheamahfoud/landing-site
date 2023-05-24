import SocialLink from "../../../../components/buttons/social/socialLink";

export const SocialGroup = () => {
  return (
    <div style={{ display: "flex" }}>
      <SocialLink name="facebook" url="https://www.facebook.com/nis.studio/" />
      <SocialLink name="instagram" url="https://www.instagram.com/nis_company/?hl=en" />
      <SocialLink name="twitter" url="https://twitter.com/NiS_Company" />
      <SocialLink name="youtube" url="https://www.youtube.com/user/newinteractivestudio" />
    </div>
  );
};
