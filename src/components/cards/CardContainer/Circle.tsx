import { styled } from "styled-components";
import { desktop, laptop, mobile, smallMobile, tablet, xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../../responsive";
type Props = {
  url: string;
};
export const CircleCardContainer = styled.div<Props>`
  width: 320px;
  height: 320px;
  filter: alpha(opacity=100);
  background-color: #f8f6e1;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  cursor: pointer;
  box-shadow: inset 3px 3px 4px rgba(255, 255, 255, 0.75),
    inset -3px -3px 4px rgba(0, 0, 0, 0.75);
  //background-image: url(https://www.nistudio.net/images/poster%20cartoon-u1081854-fr.png?crc=325150193);
  background-image:url(${(props) => props.url}) ;
  &:hover {
    transform: scale(0.9);
  }
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;


  ${desktop({ width:'320px',height: '320px' })}
  ${laptop({ width:'220px',height: '220px' })}
  ${tablet({ width:'220px',height: '220px' })}
  ${mobile({ width:'160px',height: '160px' })}
  ${smallMobile({ width:'160px',height: '160px' })}
  ${xSmallMobile({ width:'137px',height: '137px' })}
  ${xXSmallMobile({ width:'160px',height: '160px' })}
  ${xxxSmallMobile({ width:'160px',height: '160px' })}
  ${xxxxSmallMobile({ width:'160px',height: '160px' })}
`;

