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

export const WaitingTime = () => {
  return (
    <Container className="">

      <Paragraph>
        <Dash>-</Dash> The artist's presence for the recording session ahead of
        the set appointment
      </Paragraph>
      <Paragraph>
        <Dash>-</Dash> The artist is granted the privilege of "Compensable
        Waiting"
      </Paragraph>
      <Paragraph>
        <Dash>-</Dash> It starts from the recording session appointment until
        the artist gets into the studio
      </Paragraph>
      <Paragraph>
        <Dash>-</Dash> The "Waiting" time fee is added to the due hourly fee
      </Paragraph>
    </Container>
  );
};
export const ARWaitingTime = () => {
  return (
    <Container className="">

      <Paragraph>
        <Dash>-</Dash>  حضور الفنان إلى جلسة التسجيل قبل الموعد المحدد
      </Paragraph>
      <Paragraph>
        <Dash>-</Dash> يمنح الفنان ميزة: (الانتظار المأجور)
      </Paragraph>
      <Paragraph>
        <Dash>-</Dash>  والذي يبدأ من موعد جلسة التسجيل وحتى دخول الفنان إلى الأستوديو
      </Paragraph>
      <Paragraph>
        <Dash>-</Dash> حيث يضاف زمن هذا الانتظار إلى الأجر الساعي المستحق للجلسة
      </Paragraph>
    </Container>
  );
};
