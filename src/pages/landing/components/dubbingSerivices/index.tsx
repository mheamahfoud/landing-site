import { styled } from "styled-components";
import SectionTitle from "../../../../components/titles/SectionTitle";
import Right from "./Right";
import {
  desktop,
  laptop,
  tablet,
  mobile,
  xSmallMobile,
  xXSmallMobile,
  smallMobile,
  xxxSmallMobile,
  xxxxSmallMobile,
} from "../../../../responsive";
import { ImageOverLap } from "./ImageOverLap";

const Container = styled.div`
  position: relative;
  background: white;
  margin: 20px 0;
`;

const ContainerRight = styled.div`
  ${desktop({ maxWidth: "535px" })}
  ${laptop({ maxWidth: "535px" })}
  ${tablet({ maxWidth: "425px" })}
  ${mobile({ maxWidth: "350px" })}
  ${smallMobile({ maxWidth: "300px" })}
  ${xSmallMobile({ maxWidth: "301px" })}
  ${xXSmallMobile({ maxWidth: "300px" })}
  ${xxxSmallMobile({ maxWidth: "300px" })}
  ${xxxxSmallMobile({ maxWidth: "300px" })}
`;
const DubbingService = () => {
  return (
    <Container className="d-flex flex-column" style={{ gap: "20px" }}>
      <div className="d-flex">
        <SectionTitle
          title={"Dubbing Service"}
          sectionNumber="02"
          nisTitle={true}
        />
      </div>

      <div className="d-flex justify-content-between flex-wrap" style={{ gap: "20px"  , margin:'20px 0'}}>
        <ImageOverLap />
        <ContainerRight>
          <Right />
        </ContainerRight>
      </div>
    </Container>
  );
};

export default DubbingService;
