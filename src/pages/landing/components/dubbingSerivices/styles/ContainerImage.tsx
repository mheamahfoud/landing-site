import styled from "styled-components";
import SmallImageSrc from "../../../../../assets/images/DubbingService-Small1.jpg";
import BigImageSrc from '../../../../../assets/images/DubbingService-Big1.jpg';

import {
  desktop,
  laptop,
  mobile,
  smallMobile,
  tablet,
  xSmallMobile,
  xXSmallMobile,
  xxxSmallMobile,
  xxxxSmallMobile,
} from "../../../../../responsive";

export const ImageContainer = styled.div`
  position: relative;
  text-align: center;

  ${desktop({ display: 'flex' })}
  ${laptop({ display: 'flex' })}
  ${tablet({ display: 'flex' })}
  ${xxxSmallMobile({ display: 'flex'  })}
`;
export const BigImageContainer = styled.div`
  ${desktop({ width: "366px", height: "254px"  ,position:'relative'})}
  ${laptop({ width: "335px", height: "228px",position:'relative' })}
    ${tablet({ width: "300px", height: "200px" ,position:'relative'})}
    ${mobile({ width: "300px", height: "200px" })}
    ${smallMobile({ width: "300px", minHeight: "200px" })}
    ${xSmallMobile({ width: "250px", minHeight: "150px" })}
    ${xXSmallMobile({ width: "250px", minHeight: "150px" })}
    ${xxxSmallMobile({ width: "262px", height: "181px"  ,position:'relative'})}
    ${xxxxSmallMobile({ width: "262px", minHeight: "181px" })}
    background-image: url(${BigImageSrc}) ;
    background-size: cover;
    background-position: center;
    
 
`;
export const SmallImageOverlapContainer = styled.div`
  display: inline-block;
  margin: 5px 0;
  background-image: url(${SmallImageSrc});
  background-size: cover;
    background-position: center;
    ${desktop({ width: "230px", height: "200px", marginTop: '120px', marginLeft: '-15px' })}
  ${laptop({ width: "230px", height: "200px", marginTop: '120px', marginLeft: '-15px' })}
    ${tablet({ width: "185px", height: "165px", marginTop: '120px', marginLeft: '-15px' })}
    ${mobile({ width: "185px", height: "165px" })}
    ${smallMobile({ width: "160px", height: "145px" })}
    ${xSmallMobile({ width: "165px", height: "145px" })}
    ${xXSmallMobile({ width: "165px", minHeight: "145px" })}

    ${xxxSmallMobile({ width: "165px", height: "145px", position: 'relative', zIndex: '10', marginTop: '120px', marginLeft: '-15px' })}

    ${xxxxSmallMobile({ width: "165px", minHeight: "145px", position: 'relative', zIndex: '10' })}
    &:hover {
    //opacity: 1;
    background-color: #545454;
  }
`;
export const SmallImageOContainer = styled.div`
  display: inline-block;
  position: absolute;
  top: 30%;
  left: 98%;
  background-image: url(${SmallImageSrc});

    &:hover {
    //opacity: 1;
    background-color: #545454;
  
  }
`;

export const SmallImageContainer = styled.div`
 display: inline-block;
  margin: 5px 0;
  background-image: url(${SmallImageSrc});
  background-size: cover;
    background-position: center;
    ${desktop({ width: "230px", height: "200px", marginTop: '135px', marginLeft: '-15px' })}
  ${laptop({ width: "185px", height: "165px", marginTop: '135px', marginLeft: '-15px' })}
    ${tablet({ width: "185px", height: "165px", marginTop: '135px', marginLeft: '-15px' })}

    ${mobile({ width: "185px", height: "165px" })}
    ${smallMobile({ width: "160px", height: "145px" })}
    ${xSmallMobile({ width: "165px", height: "145px" })}
    ${xXSmallMobile({ width: "165px", minHeight: "145px" })}

    ${xxxSmallMobile({ width: "121px", height: "109px",  marginTop: '115px', marginLeft: '-15px' })}

    ${xxxxSmallMobile({ width: "121px", minHeight: "109px" })}
    &:hover {
    //opacity: 1;
    background-color: #545454;
  }


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
