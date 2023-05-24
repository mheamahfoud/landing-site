import { styled } from "styled-components";
import { MainColor } from "../../../../helpers";
import { CustomLink } from "../../../../components/buttons/normal/CustomLink";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleField = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: #f8f6e1;
  background-color: transparent;
  position: relative;
  margin: 2px 0;
`;
const ContentField = styled.span`
  font-size: 18px;
  line-height: 32px;
  color: ${MainColor};
`;
const ProjectDetails = ({ ...props }) => {
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
              <div  style={{position:'absolute' , margin:'-5px   200px'}}>
                <CustomLink url={info[index + 2]?.value} ><img src="https://www.nistudio.net/images/you%20tube.png?crc=195068780" ></img></CustomLink>
           
              </div>


            }

          </div>
        )
      })}

    </Container>
  );
};

export default ProjectDetails;
