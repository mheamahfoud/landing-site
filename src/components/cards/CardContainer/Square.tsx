import { styled } from "styled-components";
import { desktop, laptop, mobile, smallMobile, tablet, xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../../responsive";
type Props = {
  url: string;
};
export const SquareCardContainer = styled.div<Props>`
  ${desktop({ width:'400px',height: '320px' })}
  ${laptop({ width:'390px',height: '310px' })}
  ${tablet({ width:'380px',height: '310px' })}
  ${mobile({ width:'300px',height: '245px' })}
  ${smallMobile({ width:'300px',height: '245px' })}
  ${xSmallMobile({ width:'290px',height: '242px' })}
  ${xXSmallMobile({ width:'250px',height: '230px' })}
  ${xxxSmallMobile({ width:'250px',height: '230px' })}
  ${xxxxSmallMobile({ width:'240px',height: '205px' })}
  

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

  
`;

// export const CardContainer = ({ children }: Props) => {
//   return (
//     <Containr className="d-flex justify-content-center align-items-center">
//       {children}
//     </Containr>
//   );
// };
