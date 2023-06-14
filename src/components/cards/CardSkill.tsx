import React from "react";
import { styled } from "styled-components";
import './style.css'
import NumberDisplay from "../animations/NumberDisplay";
import { desktop, laptop,  } from "../../responsive";
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
  ${desktop({
  width: '213px',

})}
  ${laptop({
  width: '175px',

})}

`;
const Quantity = styled.div`
   flex-grow: 1;


 `;
  
 
  

const Title = styled.div` 
 height:83px;
`;
  


export const CardSkill = (props: props) => {
  const { children, quantity } = props;
  return (
    <Container className="d-flex flex-column ">
      <Quantity className="fs-1">
        <NumberDisplay value={quantity} />
      </Quantity>
      <Seperator />
      <Title>{children}</Title>
    </Container>
  );
};
