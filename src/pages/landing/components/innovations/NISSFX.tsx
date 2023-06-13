import { styled } from "styled-components";
import { useLang } from "../../../../i18n/Metronici18n";
const Container = styled.div`
  height: fit-content;
  border: solid;
  text-align: center;
  background-color: transparent;
  position: relative;
  color: #7f7f7f;
  border-style: solid;
  border-color: #f15722;
  border-width: 1px;
  padding: 5px 2px;
`;
const Title = styled.p`
margin:0;
  
  font-size:1.5rem ;

`;
const Paragraph = styled.p`
  margin:0;
  text-indent: 5px;
  font-size:1.2rem;
`;
export const NISSFX = () => {
  const lang = useLang();
  return (
    <Container>
      <Title className="fw-bolder">NiS SFX</Title>
      {lang == 'ar' ? <Paragraph className="fw-normal">
        ابتكرت شركة NiS عام 2005 برنامج NiS-SFXلإدارة مكتبات المؤثرات الصوتية ومكتبات الموسيقى،
        وهذا البرنامج فريد من نوعه في هذا المجال حيث يساعد في رفع جودة العمل وتسريعه.
      </Paragraph>
        : <Paragraph className="fw-normal">
          Is a software solution that helps is easly, instantly and precisly
          implement the required Sound Effects (SFX).
        </Paragraph>


      }
    </Container>
  );
};
