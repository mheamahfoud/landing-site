import { styled } from "styled-components";
import { MainColor } from "../../helpers";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
`;

const TitleField = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: #f8f6e1;
  background-color: transparent;
  position: relative;
`;
const ContentField = styled.span`
  font-size: 18px;
  line-height: 32px;
  color: ${MainColor};
`;
const LeftSectionModal = ({ ...props }) => {
  const { info } = props;
  return (
    <Container>
      {info.map((item) => {
        <TitleField>
          <ContentField id="u242294">item.key</ContentField> item.value
        </TitleField>;
      })}
 
    </Container>
  );
};

export default LeftSectionModal;
