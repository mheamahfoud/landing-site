import { ButtonModal } from "../../../components/buttons/modal";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import "./style.css";
import { getProjectDetails } from "../../../services/categories";
import { useQuery } from "react-query";
import LeftSectionModal from "../LeftSectionModal";
import { toAbsoluteServerUrl } from "../../../helpers/AssetHelpers";
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
  children: React.ReactNode;
}
const ModalProject: React.FC<Props> = ({
  children,
  id,
  title,
  showModal,
  handleCloseModal,
  handlePrevCard,
  handleNextCard,
}) => {
    alert(id)
  const { data, isFetching } = useQuery(`${"categofdsfsdfries"}-${id}`, () => {
    return getProjectDetails(id);
  });

  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      dialogClassName="custom-modal"
      centered
    >
      {data && (
        <div className="top-section-project-details background-image">
          <div>
            <Title>{title}</Title>
          </div>
          <div className="project-deteails-content">
              <div className="item">
                <LeftSectionModal  info={data?.info}/>
              </div>
              <div className="item img-display-container">
                <img
                  className="img-display"
                  src={toAbsoluteServerUrl(data?.image)}
                />
              </div>
            </div>
        </div>
      )}
      {!data && <h1>loading</h1>}

      <div className="bottom-section">
        <ButtonModal onClick={handlePrevCard}>{"<"}</ButtonModal>

        <ButtonModal onClick={handleCloseModal}>
          {<span>&times;</span>}
        </ButtonModal>

        <ButtonModal onClick={handleNextCard}>{">"}</ButtonModal>
      </div>
    </Modal>
  );
};

export default ModalProject;
