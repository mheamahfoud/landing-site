import {  BigImageContainer,  ImageContainer, SmallImageContainer, SmallImageOverlapContainer } from "./styles/ContainerImage";
// import BigImageSrc from '../../../../assets/images/DubbingService-Big1.jpg';
// import SmallImageSrc from '../../../../assets/images/DubbingService-Small1.jpg';
// SmallImageContainer, SmallImageOverlapContainer
export const ImageOverLap = () => {
  return (
    <ImageContainer >
      <BigImageContainer style={{}} >
      </BigImageContainer>
      { <SmallImageContainer>
      </SmallImageContainer> }
    </ImageContainer>
  );
};
