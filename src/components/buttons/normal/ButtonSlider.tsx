import React  from "react";
import styled from "styled-components";
import { buttonSlider } from "../../../responsive";
interface props {
  children?: React.ReactNode;
}



const Container = styled.div`
  width: 50px;
  height: 50px;
  border-style: solid;
  border-width: 2px;
  border-color: #f15722;
  background-color: transparent;
  &:hover {
    border-color: #a3a1a1;
  }

  ${buttonSlider({ width:'40px',height:'40px'})}
`;
export const ButtonSlider = (props: props) => {
  const { children } = props;
  return (
    <Container className="rounded-circle d-inline-flex justify-content-center align-items-center">
      {children}
    </Container>
  );
};
