import { styled } from "styled-components";
import { vedioResponsive } from "../../../../responsive";

const Container = styled.div`
  line-height: 26px;
  font-size: 17px;
  color: #7f7f7f;
  width: 400px;
  ${vedioResponsive({fontSize:'14px', lineHeight:'18px', width:'300px'})}
`;


const Paragraph=styled.p`
 margin:0;

`;
const Dash = styled.span`
  color: #f15722;
`;

export const TechnicalError = () => {
  return (
    <Container className="">

      <Paragraph>
        <Dash>-</Dash>In case of any potential technical error during the recording session
      </Paragraph>
      <Paragraph>
        <Dash>-</Dash> The session time remains effective till the fault is fixed and continuing the recording session
      </Paragraph>
      <Paragraph>
        <Dash>-</Dash>when there is technical error, the interval time is added
      </Paragraph>
      <Paragraph>
        <Dash>-</Dash>to the due hourly fee of the session
      </Paragraph>
    </Container>
  );
};
