import { styled } from "styled-components";
import { MainColor } from "../../../../helpers";
import { useIntl } from "react-intl";
interface Props {
    url:string,
    title:string
}
interface ImageProps {
    url:string,
  
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

`;
const Image = styled.img<ImageProps>`
  background-image: url(${(props)=>props.url});
  background-repeat: no-repeat;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";
  filter: alpha(opacity=90);
  background-color: transparent;
  background-position: center center;
  position: relative;
  border-radius: 50%;
  opacity: 0.9;
  background-size: cover;
  cursor: pointer;
  width:78px;
  height:78px;

`;
const Title = styled.h4`
  color: ${MainColor};
  
`;
export const ImageContainer = (props:Props) => {
  const intl=useIntl();
const {url,title}=props;
  return (
    <Container>
      <Image url={url} />
      <Title>{intl.formatMessage({id:title})}</Title>
    </Container>
  );
};
