import React from "react";
import { styled } from "styled-components";
import './style.css'
import NumberDisplay from "../animations/NumberDisplay";
interface props {
  children: React.ReactNode;
  quantity: number;
}
const Container = styled.div`
  text-align: center;
  color: #f15722;
  background-color: transparent;
  position: relative;
  font-family: roboto, sans-serif;
  font-weight: 300;
  border-color: transparent;
  border-width: 0px;
  min-height: 83px;
`;

const Seperator = styled.div`
  z-index: 71;
  margin: 3px auto;
  width: 130px;
  background-color: #f15722;
  position: relative;
  height: 1px;
`;
const Quantity = styled.div`
  font-size: 60px;
  line-height: 72px;
  width: 285px;
  min-height: 83px;
  font-size: 60px;
  line-height: 72px;
`;
const Title = styled.div``;
export const CardSkill = (props: props) => {
  const { children, quantity } = props;
  return (
    <Container className="d-flex flex-column">
      <Quantity>
        <NumberDisplay value={quantity} />
      </Quantity>
      <Seperator />
      <Title>{children}</Title>
    </Container>
  );
};
