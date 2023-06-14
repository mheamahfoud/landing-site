import { styled } from "styled-components";
import { vedioResponsive } from "../../../../responsive";

const Container = styled.div`
  line-height: 26px;
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

export const MissingAppointment = () => {
  return (
    <Container className="fs-6">

      <Paragraph>
        <Dash>-</Dash> in case NiS calls off the recording session
      </Paragraph>
      <Paragraph>
        <Dash>-</Dash>after the artist had arrived in the company's premises
      </Paragraph>
      <Paragraph>
        <Dash>-</Dash> the recording session fee shall be fully compensable
      </Paragraph>
      <Paragraph>
        <Dash>-</Dash>the artist obtains a recording session ticket
      </Paragraph>
      <Paragraph>
        <Dash>-</Dash>the time of which is the same for the session, which has been agreed upon when booking an appointment
      </Paragraph>
    
    </Container>
  );
};


export const ARMissingAppointment = () => {
  return (
    <Container className="fs-6">

      <Paragraph>
        <Dash>-</Dash> في حال اعتذرت الشركة عن جلسة التسجيل
      </Paragraph>
      <Paragraph>
        <Dash>-</Dash>بعد وصول الفنّان إلى مقرّ الشركة،
      </Paragraph>
      <Paragraph>
        <Dash>-</Dash> فإنّ أجر جلسة التسجيل يكون مأجوراً بالكامل،
      </Paragraph>
      <Paragraph>
        <Dash>-</Dash>ويحصل الفنّان على بطاقة جلسة تسجيل
      </Paragraph>
      <Paragraph>
        <Dash>-</Dash>ويكون زمنها هو زمن الجلسة الذي تم الاتفاق عليه عند تحديد الموعد
      </Paragraph>
    
    </Container>
  );
};