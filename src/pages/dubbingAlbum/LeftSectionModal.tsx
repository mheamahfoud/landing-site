import { styled } from "styled-components";
import { MainColor } from "../../helpers";
import SocialLink from "../../components/buttons/social/socialLink";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: space-between;
`;

const TitleField = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: #f8f6e1;
  background-color: transparent;
  position: relative;
  margin: 0;
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
      {info.filter(x => x.key != 'Name Projects').map((item, index) => {

        return (
          <div className="d-flex justify-content-between">
            {item.key != 'Link:' && <TitleField>
              <ContentField id="u242294">{item.key}</ContentField> {item.value}
            </TitleField>}

            {info[index + 2]?.key == 'Link:' &&
              <div >
                <SocialLink name="youtube" url={info[index + 2]?.value} />
              </div>


            }

          </div>
        )
      })}

    </Container>
  );
};

export default LeftSectionModal;
