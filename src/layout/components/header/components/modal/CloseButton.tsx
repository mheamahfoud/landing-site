import React, { FC } from 'react';
import { styled } from 'styled-components';
interface Props {
    onClick : ()=>void
}

const Container =styled.div`
    background-color: #F15722;
    color: #1C1C1C;
    text-align: center;
    font-family: raleway, sans-serif;
    font-weight: 300;
    width: 40px;
    height: 40px;
    line-height: 34px;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
`;

const CloseButton : FC<Props> = ({onClick}) => {
  return (
    <Container onClick={onClick} className='d-flex  justify-content-center align-items-center'>
      <span>x</span>
    </Container>
  );
}

export default CloseButton;
