import { styled } from "styled-components";
import SectionTitle from "../../../../components/titles/SectionTitle";
import Right from "./Right";

const Container = styled.div`
  position: relative;
  background: white;

`;

const Left = styled.div`

`;

const ImageContainer = styled.div`
    background-image: url(https://www.nistudio.net/images/img_4862.jpg?crc=3871607457);
    min-height: 254px;
    width: 366px;
    visibility: visible;
    animation-duration: 1s;
    animation-delay: 0.2s;
    background-color: transparent;
    background-repeat: no-repeat;
    opacity: 1;
    background-position: center center;
    background-size: contain;
    &:hover {
    opacity: 1;
    background-color: #545454;
    }
 
`;
const ImageContainer2 = styled.div`
    background-image: url(https://www.nistudio.net/images/img_4733-new.jpg?crc=495623009);
    width: 252px;
    height: 222px;
    visibility: visible;
    animation-duration: 1s;
    animation-delay: 0.2s;
    background-color: transparent;
    background-repeat: no-repeat;
    opacity: 1;
    background-position: center center;
    background-size: contain;
    &:hover {
    opacity: 1;
    background-color: #545454;

    }
   
`;
const DubbingService = () => {
  return (
    <Container className="d-flex flex-column gap-3">

        <SectionTitle title={"Dubbing Service"} sectionNumber="02" nisTitle={true} />




      <div className="d-flex  justify-content-between">
        <div >
          <ImageContainer />
        </div>
        <div style={{width:'564px'}}>
          <Right />
        </div>



      </div>
    </Container>
  );
};

export default DubbingService;
