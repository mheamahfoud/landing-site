import { styled } from "styled-components";
import SectionTitle from "../../../../components/titles/SectionTitle";
import  { Carousel } from "./Carousel";
import { desktop } from "../../../../responsive";

const Container = styled.div`
 
  

`;

const Left = styled.div`

      ${desktop({ width: '370px' })}
`;
const Right = styled.div`
  padding: 50px 0;
  ${desktop({ width: '810px' })}

`;


const index = () => {
  return (
  <Container className="d-flex justify-content-center">
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
