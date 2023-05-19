import styled from "styled-components";
import BigImageSrc from '../../../../../assets/images/DubbingService-Big1.jpg';
import SmallImageSrc from '../../../../../assets/images/DubbingService-Small1.jpg';

export const ContainerImage =styled.div`
  position: relative;

`;
export const BigImage = styled.div`
    background-image: url(${BigImageSrc});
    min-height: 254px;
    width: 366px;
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
 
`;
export const SmallImage = styled.div`
    background-image: url(${SmallImageSrc});
    width: 252px;
    height: 222px;
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
   
`;
