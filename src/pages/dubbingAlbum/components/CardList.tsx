import { useCallback, useState } from "react";
import { episodes } from "./util";
import { WrapperCard } from "./WrapperCard";
import CardPagination from "../../../components/cards/pagination/CardPagination";
import { Modal } from "react-bootstrap";
import "./style.css";
import { ButtonModal } from "../../../components/buttons/modal";
import LeftSectionModal from "../LeftSectionModal";
import styled from "styled-components";
const Title = styled.h3`
    color: #FFFFFF;
    background-color: transparent;
    position: relative;
`;
export const CardList = () => {
  const handleClick = useCallback((id: number) => {
    const index = episodes.findIndex((x) => x.id == id);
    setCurrentCardIndex(index);
    setShowModal(true);
  }, []);
  const cardsPerPage: number = 10;
  const [showModal, setShowModal] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);



  const handleNextCard = () => {
    if (currentCardIndex < episodes.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <WrapperCard className="">
      <CardPagination
        cardsPerPage={cardsPerPage}
        cards={episodes}
        onClick={handleClick}
      ></CardPagination>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        dialogClassName="custom-modal"
        centered
      >
        <div className="top-section background-image">
          <div style={{}}>
            <Title>The Cheetah Diaries</Title>
          </div>
          <div  className="section-field " >
            <div className="item">
              <LeftSectionModal />

            </div>
            <div className="item img-display-container" >
              <img
              className="img-display"
                
                src={episodes[currentCardIndex].imgSrc}
              />
            </div>
          </div>


        </div>
        <div className="bottom-section">
          <ButtonModal onClick={handlePrevCard}>{"<"}</ButtonModal>

          <ButtonModal onClick={handleCloseModal}>{<span>&times;</span>}</ButtonModal>

          <ButtonModal onClick={handleNextCard}>{">"}</ButtonModal>
        </div>
      </Modal>
    </WrapperCard >
  );
};
