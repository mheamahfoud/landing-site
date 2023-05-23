import styled from 'styled-components';
import NisLocationSrc from '../../../assets/images/nis-location.png'
import { laptop, mobile, smallMobile, tablet, xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from '../../../responsive';
export const Image = styled.img`
  width: 522px;
  height: 349px;
  background-repeat: no-repeat;
  background-image: url(${NisLocationSrc});
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  position: relative;
  z-index: 39;
  filter: alpha(opacity=100);
  background-color: transparent;
  opacity: 1;
  background-position: center center;
  border-radius: 25px;
  background-size: cover;
  ${laptop({width:'441px',height:'295px'})}
  ${tablet({width:'441px',height:'295px'})}
  ${mobile({width:'441px',height:'295px'})}

  ${smallMobile({width:'350px',height:'245px'})}
  ${xSmallMobile({width:'350px',height:'245px'})}
  ${xXSmallMobile({width:'350px',height:'245px'})}
  ${xxxSmallMobile({width:'350px',height:'245px'})}
  ${xxxxSmallMobile({width:'350px',height:'245px'})}
`;