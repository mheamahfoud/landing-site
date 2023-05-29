import { FC } from 'react';
import { styled } from 'styled-components';
interface Props {
    isSubmitting: boolean,
    isValid: boolean,
}
const Button = styled.button`
  width: 200px;
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
const SubmitButton: FC<Props> = ({ isSubmitting, isValid }) => {
    return (
        <Button >
            {!isSubmitting && <span className='indicator-label'>Submit</span>}
            {
                isSubmitting && (
                    <span className=''>
                        Please wait...
                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                )
            }
        </Button>
    );
}

export default SubmitButton;
