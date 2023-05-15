import SocialLink from "../../../../components/buttons/social/socialLink";

export const SocialGroup = () => {
  return (
    <div style={{ display: "flex" }}>
      <SocialLink name="facebook" url="https://www.facebook.com/" />
      <SocialLink name="instagram" url="https://www.instagram.com/" />
      <SocialLink name="twitter" url="https://twitter.com/" />
      <SocialLink name="youtube" url="https://www.youtube.com/" />
    </div>
  );
};
