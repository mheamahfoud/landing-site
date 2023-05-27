import styled from "styled-components";
import { desktop, laptop, smallMobile, tablet, xSmallMobile, xXSmallMobile , mobile, xxxSmallMobile, xxxxSmallMobile} from "../../../../../../responsive";

export const ImageContainer = styled.span`
  padding: 2px;
  float: right;

`;

export const ImageCover = styled.span`
  border-style: solid;
  border-color: #f15722;
  background-color: transparent;
  border-radius: 25px 0px 25px 25px;
  border-width: 2px 0px 0px 2px;
  overflow: hidden;
  display: block;
  ${desktop({ width: '390px'  })}
  ${laptop({ width: '390px' })}
  ${tablet({ width: '390px' })}
  ${mobile({ width: '322px'})}
  ${smallMobile({ width: '350x',height:'210px' })}
  ${xSmallMobile({ width: '280px' ,height:'168px'})}
  ${xXSmallMobile({ width: '280px',height:'168px'})}

  ${xxxSmallMobile({ width: '270px',height:'162px' , marginBottom:'10px'})}

  ${xxxxSmallMobile({ width: '100%',height:'112px', marginBottom:'10px'})}
 
`;


export const ImageText = styled.img`

width: 100%;
`;