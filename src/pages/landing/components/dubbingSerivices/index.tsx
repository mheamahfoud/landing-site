import { styled } from "styled-components";
import SectionTitle from "../../../../components/titles/SectionTitle";

const Nis = styled.span`
  color: #f15722;
`;
const Container = styled.div`
  position: relative;
  background: white;
  width: "1300px";
`;

const Left = styled.div`

`;
const Right = styled.div`
    z-index: 88;
    min-height: 351px;
    font-size: 18px;
    line-height: 39px;
    color: #7F7F7F;
 

`;

const Paragraph = styled.p`
  margin: 0;
    color: #7F7F7F;
`;
const Dot = styled.span`
     color: #f15722;
`;

const ImageContainer = styled.div`
    background-image: url(https://www.nistudio.net/images/img_4862.jpg?crc=3871607457);
    height: 254px;
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
    position: relative;
    z-index: 20;
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
    <Container className="row justify-content-center">
      <div className="col-md-3">
        <SectionTitle title={"Dubbing Service"} sectionNumber="02" nisTitle={true} />
      </div>
      <div className="col-md-9" style={{ width: '809px' }}>

      </div>
      <div className="row justify-content-center">
        <Left className="col-md-5" style={{ padding: '0' }} >
          <ImageContainer />
        </Left>

        <Left className="col-md-2" style={{ padding: '0' }} >
          {<ImageContainer2 />}
        </Left>
        <Right className="col-md-5" style={{ width: '550px' }} >
          <Paragraph> <Nis>Nis</Nis> <span id="u1790-2"> offers services in the field of audio dubbing for all artistic works:</span></Paragraph>
          <Paragraph><span id="u1790-4">Drama, movies, documentaries, cartoon films… etc; transforming any original language into the following languages</span> <span id="u1790-6">and accents:</span></Paragraph>
          <Paragraph><Dot>• </Dot><span id="u1790-9">Classical Arabic</span></Paragraph>
          <Paragraph><Dot>•</Dot> <span id="u1790-13">Syrian accent</span></Paragraph>
          <Paragraph><Dot>•</Dot> <span id="u1790-17">Egyptian Accent</span></Paragraph>
          <Paragraph><Dot>•</Dot> <span id="u1790-21">Turkish</span></Paragraph>
          <Paragraph><Dot>•</Dot> <span id="u1790-25">Persian</span></Paragraph>
          <Paragraph><Dot>•</Dot> <span id="u1790-29">Kurdish</span></Paragraph>
        </Right>
      </div>
    </Container>
  );
};

export default DubbingService;
