import styled from "styled-components";
import SmallImageSrc from '../../../../../assets/images/DubbingService-Small1.jpg';
import { desktop, laptop, mobile, smallMobile, tablet, xSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../../../../responsive";

export const ImageContainer = styled.div`
  position: relative;


`;
export const BigImageContainer = styled.div`
    ${desktop({ width: '366px', height: '254px' })}
    ${laptop({ width: '335px', minHeight: '228px' })}
    ${tablet({ width: '335px', minHeight: '228px' })}
    ${mobile({ width: '300px', minHeight: '200px' })}
    ${smallMobile({ width: '300px', minHeight: '200px' })}
    ${xSmallMobile({ width: '300px', minHeight: '200px' })}
    ${xxxSmallMobile({ width: '300px', minHeight: '200px' })}
    ${xxxxSmallMobile({ width: '300px', minHeight: '200px' })}
    background-color: #ffff;
    &:hover {
    //opacity: 1;
    background-color: #545454;

    }
`;
export const SmallImageContainer = styled.div`
    background-image: url(${SmallImageSrc});
    ${desktop({ width: '250px', height: '220px' })}
    ${laptop({ width: '185px', height: '165px' })}
    ${tablet({ width: '185px', height: '165px' })}
    ${mobile({ width: '185px', height: '165px' })}
    ${smallMobile({ width: '185px', height: '165px' })}
    ${xSmallMobile({ width: '185px', height: '165px' })}
    &:hover {
    //opacity: 1;
    background-color: #545454;

    }
    position: relative;
  
   
`;

export const Image = styled.img`
 background-color: transparent;
    background-repeat: no-repeat;
    opacity: 1;
    background-position: center center;
    background-size: contain;
    visibility: visible;
    animation-duration: 1s;
    animation-delay: 0.2s;

    &:hover {
      transform: scaleY(0.99);
    
    }
    position: relative;
    z-index: 5;
  `;
