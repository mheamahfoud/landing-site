import { styled } from "styled-components";
import SectionTitle from "../../../../components/titles/SectionTitle";
import  { Carousel } from "./Carousel";

const Container = styled.div`
  position: relative;
  background: white;
  width: 1300px;

`;

const Left = styled.div`
      background-color:'red';
`;
const Right = styled.div`
  padding: 50px 0;
  width: 809px;
`;


const index = () => {
  return (
  <Container className="row justify-content-center">
    <Left className="col-md-3 col-sm-12">
      <SectionTitle title={"About Us"} sectionNumber="01" />

    </Left>
    <Right className="col-md-9 col-sm-12">
      <Carousel />
    </Right>
  </Container>
  );
};

  export default index;
