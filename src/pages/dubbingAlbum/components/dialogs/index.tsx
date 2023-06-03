import "./style.css";
import { getProjectDetails } from "../../../../services/categories";
import { useQuery } from "react-query";
import ProjectInfo from "./ProjectInfo";
import { toAbsoluteServerUrl } from "../../../../helpers/AssetHelpers";
import { Loader } from "../Loader";
import { ActorsName } from "./ActorsName";
import { useRef } from "react";
import { Image, ImageDisplayContainer, ModalContainer, ProjectDetailsContainer, ProjectInfoContainer, Title } from "./styles";
import ButtonSection from "./ButtonSection";
import { ModalStyle } from "./ModalStyled";


interface Props {
  showModal: boolean;
  currentCardIndex: number;
  id: number;
  title: string;
  handleCloseModal: () => void;
  handlePrevCard: () => void;
  handleNextCard: () => void;
  height:{lg:string,md:string,sm:string},
  category_id:number
}
const ModalProject: React.FC<Props> = ({
  id,
  title,
  showModal,
  handleCloseModal,
  handlePrevCard,
  handleNextCard,
  height,
  category_id
}) => {
  const { data } = useQuery(`${"project-id"}-${id}`, () => {
    return getProjectDetails(id);
  },
  // {
  // enabled:true
  // }
  );
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    if (!touchStartX.current || !touchStartY.current) {
      return;
    }

    const touchCurrentX = event.touches[0].clientX;
    const touchCurrentY = event.touches[0].clientY;
    const touchDeltaX = touchStartX.current - touchCurrentX;
    const touchDeltaY = touchStartY.current - touchCurrentY;

    if (Math.abs(touchDeltaY) < Math.abs(touchDeltaX)) {
      event.preventDefault(); // Prevent vertical scrolling while swiping

      if (touchDeltaX > 0) {
        // Swiped left
        handleNextCard()
        console.log('Swiped left');
      } else if (touchDeltaX < 0) {
        // Swiped right

        handlePrevCard()
        console.log('Swiped right');
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };
  return (
    <ModalStyle
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      show={showModal}
      onHide={handleCloseModal}
      centered
      dialogClassName="custom-modal"
      heightTem={height}
    >
      <ModalContainer
      >
        {data && (
          <div className="d-flex flex-column">
            <Title>{title}</Title>
            <ProjectDetailsContainer>
              <ProjectInfoContainer className="item">
                <ProjectInfo info={data?.info} />
              </ProjectInfoContainer>
              <ImageDisplayContainer category={category_id}>
                <Image className="img-display"
                  src={toAbsoluteServerUrl(data?.image)}
                />
              </ImageDisplayContainer>

            </ProjectDetailsContainer>
            {data?.actors && data?.actors.length > 0 && (
              <ActorsName names={data?.actors.map((x) => x.name)} />
            )}
          </div>
        )}
        {!data && <Loader />}

        <ButtonSection handlePrevCard={handlePrevCard} handleCloseModal={handleCloseModal} handleNextCard={handleNextCard} />
      </ModalContainer>
    </ModalStyle>
  );
};

export default ModalProject;
