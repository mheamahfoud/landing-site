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

`;

const ContainerRight = styled.div`
  ${desktop({ maxWidth: "535px", margin:"0 50px" })}
  ${laptop({ maxWidth: "535px", margin:"0 50px" })}
  ${tablet({ maxWidth: "425px", margin:"0 50px" })}
  ${mobile({ maxWidth: "350px" , margin:"0 50px" })}
  ${smallMobile({ maxWidth: "300px", margin:"0 50px"  })}
  ${xSmallMobile({ maxWidth: "301px" , margin:"0 20px"})}
  ${xXSmallMobile({ maxWidth: "250px", margin:"0 20px" })}
  ${xxxSmallMobile({ maxWidth: "301px", margin:'0 25px'  })}
  ${xxxxSmallMobile({ maxWidth: "250px" , margin:'0 25px' })}
`;

const Bottom =styled.div`
  margin: 20px 0;
  ${xxxSmallMobile({ flexDirection:'column' , gap:'50px'})}
  ${xxxxSmallMobile({ flexDirection:'column' ,alignItems:'center'})}
`;
const DubbingService = () => {
  return (
    <Container className="" >
   
        <SectionTitle
          title={"Dubbing Service"}
          sectionNumber="02"
          nisTitle={true}
        />
    

      <Bottom className="d-flex  justify-content-start " >
        <ImageOverLap />
        <ContainerRight>
          <Right />
        </ContainerRight>
      </Bottom>
    </Container>
  );
};

export default DubbingService;
