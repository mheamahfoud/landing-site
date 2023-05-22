import  { FC } from 'react';
import { styled } from 'styled-components';
import MenuImageSrc from '../../../../assets/images/menu-mobile.png'
const Container =styled.div`
     width: 50px;
     height: 50px;
    border-color: #DEDEDE;
    opacity: 1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    filter: alpha(opacity=100);
    background: transparent url(${MenuImageSrc}) no-repeat right center;
    cursor: pointer;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    &:hover {
        background: transparent url(${MenuImageSrc}) no-repeat left center; 
    }
    
`;
interface Props {
    onClick : ()=>void
}
const ButtonMenu : FC<Props>= ({onClick}) => {
  return (
    <Container onClick={onClick}>
      
    </Container>
  );
}

export default ButtonMenu;
