import React from 'react';
import { styled } from 'styled-components';

const Button = styled.button`
  width: 191px;
  height: 40px;
  border-radius: 25px;
  border-color: #6B6B6B;
    color: #F15722;
    background-color: #1C1C1C;
    font-weight: 400;
    font-size: 25px;
    position: relative;
    font-family: roboto, sans-serif;
    display: inline-flex;
    justify-content:center;
    margin-bottom: 20px;
    transition: background-color 0.1s ease-in;

   &:hover {
    color:#1C1C1C ;
    background: #F15722;
    border-color: #F15722;
   }
  

  

 `;
const SubmitButton = () => {
    return (
        <Button className="" >


            <p>
                SUBMIT
            </p>

        </Button>
    );
}

export default SubmitButton;
