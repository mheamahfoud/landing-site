import styled from "styled-components";
import BigImageSrc from '../../../../../assets/images/DubbingService-Big1.jpg';
import SmallImageSrc from '../../../../../assets/images/DubbingService-Small1.jpg';
import { desktop, laptop, mobile, tablet } from "../../../../../responsive";

export const ContainerImage =styled.div`
  position: relative;
  display: flex;

`;
export const BigImage = styled.div`
    ${desktop({width:'366px',height:'254px'})}
    ${laptop({width:'335px',minHeight:'228px'})}
    ${tablet({width:'335px',minHeight:'228px'})}
    background-image: url(${BigImageSrc});
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
    z-index: 5;
 
`;
export const SmallImage = styled.div`
    background-image: url(${SmallImageSrc});
    ${desktop({width:'250px',height:'220px'})}
    ${laptop({width:'185px',height:'165px'})}
    ${tablet({width:'185px',height:'165px'})}
    ${mobile({width:'185px',height:'165px'})}
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
  
   
`;
