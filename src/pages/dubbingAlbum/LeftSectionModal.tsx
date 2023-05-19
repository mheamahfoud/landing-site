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
    color: #F8F6E1;
    background-color: transparent;
    position: relative;
`;
const ContentField = styled.span`
    font-size: 18px;
    line-height: 32px;
    color: ${MainColor};

`;
const LeftSectionModal = () => {
    return (
        <Container>
            <TitleField ><ContentField id="u242294">Genre:</ContentField> Series – Nature</TitleField>
            <TitleField ><ContentField id="u242294-4">Episode Count:</ContentField> 13 Ep × 45 Min</TitleField>
            <TitleField ><ContentField id="u242294-7">Language:</ContentField> Arabic</TitleField>
            <TitleField ><ContentField id="u242294-10">Actors' Count:</ContentField> 12 Actors</TitleField>
            <TitleField ><ContentField id="u242294-13">Year:</ContentField> 2010</TitleField>
        </Container>
    );
}

export default LeftSectionModal;
