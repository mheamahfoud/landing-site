import styled from "styled-components";
import ImageBackground from '../../../../assets/images/bacground-modal.jpg'
import { Categories } from "../../../../helpers/Constants";
export const Title = styled.h3`
  color: #ffffff;
  background-color: transparent;
  position: relative;
`;

export const ModalContainer = styled.div`
 background-image: url(${ImageBackground});
  background-size: cover;
  height: 100%;
  padding:  15px;
  display: flex;
  flex-direction: column;
  @media (max-width: 960px) {
    justify-content: space-between;
    };
`;
export const ProjectDetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 640px) {
         flex-direction: column;

    };
`;

export const ProjectInfoContainer = styled.div`
    height: "inherit";
    flex: 1;
    @media (max-width: 640px) {
      :nth-child(1) {
        order: 2;
      }
      :nth-child(2) {
        order: 1;
      }

  };


`;
interface Props {
  category :number
}
export const ImageDisplayContainer = styled.div<Props>`
 text-align:end;
 padding: ${(props)=>(props.category==Categories.Drama || props.category==Categories.Cartoon ||props.category==Categories.Film  )? '12px 0': '' } ;
`;



export const Image = styled.img`
  width: 310px;
  height: 192px ;
  @media (max-width: 640px) {
    width: 100%;
    height: 100% 
    };

`;

