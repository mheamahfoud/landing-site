import { ButtonModal } from "../../../components/buttons/modal";
import styled from "styled-components";
import { Modal, Spinner } from "react-bootstrap";
import "./style.css";
import { getProjectDetails } from "../../../services/categories";
import { useQuery } from "react-query";
import LeftSectionModal from "../LeftSectionModal";
import { toAbsoluteServerUrl } from "../../../helpers/AssetHelpers";
import { MainColor } from "../../../helpers";
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

  const { data} = useQuery(`${"categofdsfsdfries"}-${id}`, () => {
    return getProjectDetails(id);
  });

  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      dialogClassName="custom-modal"

    >
      {data && (
        <div className="top-section-project-details background-image">
          <div>
            <Title>{title}</Title>
          </div>
          <div className="project-deteails-content">
            <div className="item">
              <LeftSectionModal info={data?.info} />
            </div>
            <div className="item img-display-container">
              <img
                className="img-display"
                src={toAbsoluteServerUrl(data?.image)}
              />
            </div>
          </div>
          <div className="row" style={{
            fontSize: '9px',
            lineHeight: '32px',
            color: '#f8f6e1',
          }}>
            {
              data?.actors.map((item) => {
                return (
                    <span  className="col-lg-2 col-md-2 col-sm-3 col-6" style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden',lineHeight:'20px' , fontSize:'13px' }}> {item?.name}</span>
                )
              })
            }

          </div>
        </div>
      )}
      {!data && <div className="d-flex justify-content-center align-items-center  background-image "  style={{height:'100px'}}>
        <Spinner   style={{color:MainColor}}/>
      </div>}

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
