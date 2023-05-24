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

export const TransportationAllowance = () => {
  return (
    <Container className="">

      <Paragraph>
        <Dash>-</Dash>The company pays artists a steady allownace for every recording session, no matter how long it takes
      </Paragraph>
      <Paragraph>
        <Dash>-</Dash> This allownace is added to the due fee for every session
      </Paragraph>
      
    </Container>
  );
};
