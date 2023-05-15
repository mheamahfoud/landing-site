import { styled } from "styled-components";
import "./style.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
const Container = styled.div`
  position: relative;
  background: white;
  width: 1300px;
  font-size: 18px;
  color: #7f7f7f;
  margin:10px 0;
`;

const Services = () => {
  return (
    <Container className="d-flex justify-content-center ">
      <LeftSection />
      <RightSection />
    </Container>
  );
};

export default Services;
