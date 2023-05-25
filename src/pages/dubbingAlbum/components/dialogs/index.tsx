import { ButtonModal } from "../../../../components/buttons/modal";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import "./style.css";
import { getProjectDetails } from "../../../../services/categories";
import { useQuery } from "react-query";
import ProjectDetails from "./ProjectDetails";
import { toAbsoluteServerUrl } from "../../../../helpers/AssetHelpers";


import { Loader } from "../Loader";
import { ActorsName } from "./ActorsName";
import { useRef } from "react";
const Title = styled.h3`
  color: #ffffff;
  background-color: transparent;
  position: relative;
`;
interface Props {
  showModal: boolean;
  currentCardIndex: number;
  id: number;
  title: string;
  handleCloseModal: () => void;
  handlePrevCard: () => void;
  handleNextCard: () => void;
}
const ModalProject: React.FC<Props> = ({
  id,
  title,
  showModal,
  handleCloseModal,
  handlePrevCard,
  handleNextCard,
}) => {
  const { data } = useQuery(`${"project-id"}-${id}`, () => {
    return getProjectDetails(id);
  });

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
    <Modal
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      show={showModal}
      onHide={handleCloseModal}
      centered
      dialogClassName="custom-modal"
    >
      <div
        className="top-section-project-details background-image"
        style={{ height: "100%" }}
      >
        {data && (
          <div>
            <div>
              <Title>{title}</Title>
            </div>

            <div className="project-deteails-content"  >
              <div className="item" style={{ height: "inherit" }}>
                <ProjectDetails info={data?.info} />
              </div>
              <div className="item img-display-container" style={{padding:'8px 0'}}>
                <img
                  className="img-display"
                  src={toAbsoluteServerUrl(data?.image)}
                />
              </div>
            </div>
            {data?.actors && data?.actors.length > 0 && (
              <ActorsName names={data?.actors.map((x) => x.name)} />
            )}
          </div>
        )}
        {!data && <Loader />}
        <div className="bottom-section">
          <ButtonModal onClick={handlePrevCard}>{"<"}</ButtonModal>

          <ButtonModal onClick={handleCloseModal}>
            {<span>&times;</span>}
          </ButtonModal>

          <ButtonModal onClick={handleNextCard}>{">"}</ButtonModal>
        </div>
      </div>
    </Modal>
  );
};

export default ModalProject;
