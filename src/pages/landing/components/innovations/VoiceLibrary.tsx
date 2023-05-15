import { styled } from "styled-components";
import { ButtonLink } from "../../../../components/buttons/normal/ButtonLink";
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
  margin-right: -10000px;
  border-style: solid;
  border-color: #f15722;
  border-width: 1px;
  width: min-content;
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
      <ButtonLink title={"Add your voice"} onClick={() => {}} />
      <ButtonLink title={"NiS Specialties"} onClick={() => {}} />
    </Container>
  );
};
