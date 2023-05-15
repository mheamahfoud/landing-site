import { styled } from "styled-components";
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
export const TazmeenSystem = () => {
  return (
    <Container>
      <Title>Tazmeen System</Title>
      <Paragraph>
        Is an innovative software based solution to manage the voice dubbing and
        localization operations. Tazmeen System is the ultimate support for the
        main dubbing industry global players, especially companies with multiple
        studios around the world, to serve all available languages.
      </Paragraph>
      <Paragraph>
        <a className="nonblock" href="http://www.tazmeen.com" target="_blank" style={{display:'inline'}}>
          <span id="u1516451">www.tazmeen.com</span>
        </a>
      </Paragraph>
    </Container>
  );
};
