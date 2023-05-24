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

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    if (!touchStartX.current) {
      return;
    }

    const touchCurrentX = event.touches[0].clientX;
    const touchDeltaX = touchStartX.current - touchCurrentX;

    if (touchDeltaX > 0) {
      // Swiped left
      handleNextCard();
      console.log("Swiped left");
    } else if (touchDeltaX < 0) {
      // Swiped right
      console.log("Swiped right");
      handleNextCard();
    }

    touchStartX.current = null;
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

            <div className="project-deteails-content">
              <div className="item">
                <ProjectDetails info={data?.info} />
              </div>
              <div className="item img-display-container">
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
