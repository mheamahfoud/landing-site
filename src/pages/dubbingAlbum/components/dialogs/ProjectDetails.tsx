import { styled } from "styled-components";
import { MainColor } from "../../../../helpers";
import { CustomLink } from "../../../../components/buttons/normal/CustomLink";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const TitleField = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: #f8f6e1;
  background-color: transparent;
  position: relative;
  margin: 2px 0;
  position: relative;
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
      {info
        .filter((x) => x.key != "Name Projects")
        .map((item, index) => {
          return (
            <>
              {item.key != "Link:" && (
                <TitleField >
                  <ContentField id="u242294">{item.key}</ContentField>{" "}
                  {item.value}
                  {info[index + 2]?.key == "Link:" && (
                    <div
                      style={{ position: "absolute", left:'220px', top:'-16px'}}
                    >
                      <CustomLink url={info[index + 2]?.value}>
                        <img
                          height={"45px"}
                          src="https://www.nistudio.net/images/you%20tube.png?crc=195068780"
                        ></img>
                      </CustomLink>
                    </div>
                  )}
                </TitleField>
              )}
            </>
          );
        })}
    </Container>
  );
};

export default ProjectDetails;
