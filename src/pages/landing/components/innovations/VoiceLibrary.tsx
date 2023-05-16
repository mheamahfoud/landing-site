import { styled } from "styled-components";
import { ButtonLinkFadeOut } from "../../../../components/buttons/normal/ButtonLinkFadeOut";
const Container = styled.div`
  height: fit-content;
  border: solid;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: transparent;
  position: relative;
  color: #7f7f7f;
  border-style: solid;
  border-color: #f15722;
  border-width: 1px;

`;
const Title = styled.p`
  font-size: 28px;
  line-height: 34px;
`;
const Paragraph = styled.p`
  font-size: 20px;
  line-height: 30px;
  text-indent: 5px;
`;
export const VoiceLibrary = () => {
  return (
    <Container>
      <Title>Voice Library</Title>
      <Paragraph>Our company owns a huge library of actors voices.</Paragraph>
      <ButtonLinkFadeOut title={"Add your voice"} onClick={() => {}} />
      <ButtonLinkFadeOut title={"NiS Specialties"} onClick={() => {}} />
    </Container>
  );
};
