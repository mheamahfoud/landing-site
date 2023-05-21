import { styled } from "styled-components";
import "./style.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
const Container = styled.div`
  position: relative;
  background: white;
  font-size: 18px;
  color: #7f7f7f;
`;

const Services = () => {
  return (
    <Container className="d-flex justify-content-center row">

      <div className="col-md-6 col-sm-12 col-sx-12">
        <LeftSection />
      </div>
      <div className="col-md-6 col-sm-12 col-sx-12">
        <RightSection />
      </div>


    </Container>
  );
};

export default Services;
