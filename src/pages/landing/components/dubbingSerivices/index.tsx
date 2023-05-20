import { styled } from "styled-components";
import SectionTitle from "../../../../components/titles/SectionTitle";
import Right from "./Right";
import { desktop, laptop, tablet, mobile, xSmallMobile, xXSmallMobile, smallMobile, xxxSmallMobile, xxxxSmallMobile, xMiddleColumn, middleColumn } from "../../../../responsive";
import {  BigImageContainer,  Image,  ImageContainer, SmallImageContainer } from "./styles/ContainerImage";
import BigImageSrc from '../../../../assets/images/DubbingService-Big1.jpg';
import SmallImageSrc from '../../../../assets/images/DubbingService-Small1.jpg';
const Container = styled.div`
  position: relative;
  background: white;

`;

const Left = styled.div`

`;

const ContainerRight = styled.div`
  ${desktop({ width: '535px'  })}
  ${laptop({ width: '535px' })}
  ${tablet({ width: '425px' })}
  ${mobile({ width: '425px'})}
  ${smallMobile({ width: '425px'})}
  ${xSmallMobile({ width: '425px'})}
  ${xXSmallMobile({ width: '425px' })}
  ${xxxSmallMobile({ width: '425px' })}
  ${xxxxSmallMobile({ width: '425px'})}
`;
const DubbingService = () => {
  return (
    <Container className="d-flex flex-column " style={{gap:'20px'}}>
      <SectionTitle title={"Dubbing Service"} sectionNumber="02" nisTitle={true} />

      <div className="d-flex justify-content-between">
        <ImageContainer >
          <BigImageContainer >
            <Image src={BigImageSrc}/>
            </BigImageContainer>
           <SmallImageContainer > 
            <Image src={SmallImageSrc}/>
            </SmallImageContainer>
        </ImageContainer>
        <ContainerRight >
          <Right />
        </ContainerRight>


      </div>
    </Container>
  );
};

export default DubbingService;
