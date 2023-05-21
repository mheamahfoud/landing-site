import { styled } from "styled-components";
import { desktop, laptop, mobile, smallMobile, tablet, xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../../responsive";
interface PropsStyle {
    url: string;
}
const Container = styled.div`
  position: relative;
  z-index: 2;
  height: 279px;
  background-color: #000000;
`;

const ImageContainer = styled.div<PropsStyle>`
  background:url(${(props) => props.url}) ;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${desktop({
    height: "90vh",
})}
  ${laptop({
    height: "95vh",
})}
  ${tablet({
    height: "70vh",
})}
 ${mobile({
    height: "70vh",
})}
 ${smallMobile({
    height: "75vh",
})}
 ${xSmallMobile({
    height: "75vh",
})}

${xXSmallMobile({
    height: "75vh",
})}
 ${xxxSmallMobile({
    height: "50vh",
})}
 ${xxxxSmallMobile({
    height: "50vh",
})}
`;
const ContainerAnimationSlider = styled.div`


`;
export const Header = (props: PropsStyle) => {
    const { url } = props;
    return (

        <ImageContainer url={url}></ImageContainer>

    );
};
