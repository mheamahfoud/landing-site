import { styled } from "styled-components";
import SectionTitle from "../../../../components/titles/SectionTitle";
import Right from "./Right";
import { desktop, laptop, tablet, mobile, xSmallMobile, xXSmallMobile, smallMobile, xxxSmallMobile, xxxxSmallMobile, xMiddleColumn, middleColumn } from "../../../../responsive";
import { BigImage, SmallImage, ContainerImage } from "./styles/ContainerImage";

const Container = styled.div`
  position: relative;
  background: white;

`;

const Left = styled.div`

`;

const ContainerRight = styled.div`
  ${desktop({ width: '625px', padding: '50px 0' })}
  ${laptop({ width: '625px', padding: '50px 0' })}
  ${tablet({ width: '625px', padding: '10px 0' })}
  ${mobile({ width: '625px', padding: '0' })}
  ${smallMobile({ width: '625px', padding: '0' })}
  ${xSmallMobile({ width: '625px', padding: '0' })}
  ${xXSmallMobile({ width: '625px', padding: '0' })}
  ${xxxSmallMobile({ width: '625px', padding: '0' })}
  ${xxxxSmallMobile({ width: '625px', padding: '0' })}
`;
const DubbingService = () => {
  return (
    <Container className="d-flex flex-column">
      <SectionTitle title={"Dubbing Service"} sectionNumber="02" nisTitle={true} />

      <div className="d-flex  justify-content-between">
        <ContainerImage >
          <BigImage />
          <SmallImage />
        </ContainerImage>
        <ContainerRight >
          <Right />
        </ContainerRight>


      </div>
    </Container>
  );
};

export default DubbingService;
