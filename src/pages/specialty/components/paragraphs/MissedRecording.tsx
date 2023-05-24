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

export const MissedRecording = () => {
  return (
    <Container className="">

      <Paragraph>
        <Dash>-</Dash> In case the company finds errors or missed recordings in some utterances in previous sessions
      </Paragraph>
      <Paragraph>
        <Dash>-</Dash> The session time remains effective when updating the missed recordings or corrections
      </Paragraph>
      <Paragraph>
        <Dash>-</Dash> This marginal time is added to the due hourly fee
      </Paragraph>
     
    </Container>
  );
};
