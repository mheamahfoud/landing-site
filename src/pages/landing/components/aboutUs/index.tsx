import { styled } from "styled-components";
import SectionTitle from "../../../../components/titles/SectionTitle";
import  { Carousel } from "./Carousel";
import { desktop, laptop, tablet,mobile, xSmallMobile, xXSmallMobile, smallMobile, xxxSmallMobile, xxxxSmallMobile, xMiddleColumn, middleColumn } from "../../../../responsive";

const Container = styled.div`
 ${middleColumn({ flexDirection: 'column' })}
`;

const Left = styled.div`


`;
const Right = styled.div`
  ${desktop({ width: '810px' ,padding:'50px 0' })}
  ${laptop({ width: '810px',padding:'50px 0' })}
  ${tablet({ width: '810px',padding:'10px 0' })}
  ${mobile({ width: '720px',padding:'0' })}
  ${smallMobile({ width: '712px',padding:'0' })}
  ${xSmallMobile({ width: '600px',padding:'0' })}
  ${xXSmallMobile({ width: '525px',padding:'0' })}
  ${xxxSmallMobile({ width: '350px',padding:'0' })}
  ${xxxxSmallMobile({ width: '250px',padding:'0' })}
`;


const index = () => {
  return (
  <Container className="d-flex ">
    <Left className="">
      <SectionTitle title={"About Us"} sectionNumber="01" />
    </Left>
    <Right className="">
      <Carousel />
    </Right>
  </Container>
  );
};

  export default index;
