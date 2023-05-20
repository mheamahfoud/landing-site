import React from "react";
import { styled } from "styled-components";
import './style.css'
import NumberDisplay from "../animations/NumberDisplay";
import { desktop, laptop, middleFont, mobile, smallMobile, tablet, xSmallMobile, xXSmallMobile, xmiddleFont, xxxSmallMobile, xxxxSmallMobile } from "../../responsive";
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
   flex-grow: 1;
  ${desktop({
  width: '285px',
  height:'70px',
  fontSize: '60px', lineHeight: '72px'
})}
  ${laptop({
  width: '213px',
   height:'70px',
  fontSize: '50px', lineHeight: '60px'
})}
  ${tablet({
  width: '213px',
  minHeight :'70px',
  fontSize: '45px', lineHeight: '54px'
})}
  ${mobile({
  width: '213px',
  height:'60px',
  fontSize: '45px', lineHeight: '54px'
})}
${smallMobile({
  width: '213px',
   height:'60px',
  fontSize: '45px', lineHeight: '54px'
})}
${xSmallMobile({
  width: '213px',
  minHeight :'60px',
  fontSize: '35px', lineHeight: '43px'
})}
${xXSmallMobile({
  width: '213px',
  height:'60px',
  fontSize: '35px', lineHeight: '43px'
})}
${xxxSmallMobile({
  width: '213px',
  height:'60px',
  fontSize: '35px', lineHeight: '43px'
})}
${xxxxSmallMobile({
  width: '213px',
  height:'60px',
  fontSize: '35px', lineHeight: '43px'
})}`;
  
 
  

const Title = styled.div`  height:83px`;
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
