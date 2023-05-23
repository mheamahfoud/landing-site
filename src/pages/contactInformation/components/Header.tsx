import { styled } from "styled-components";
import { desktop, laptop, mobile, smallMobile, tablet, xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../../responsive";
interface PropsStyle {
    url: string;
}


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
    height: "50vh",
})}
 ${xSmallMobile({
    height: "50vh",
})}

${xXSmallMobile({
    height: "50vh",
})}
 ${xxxSmallMobile({
    height: "30vh",
})}
 ${xxxxSmallMobile({
    height: "30vh",
})}
`;

export const Header = (props: PropsStyle) => {
    const { url } = props;
    return (

        <ImageContainer url={url}></ImageContainer>

    );
};
