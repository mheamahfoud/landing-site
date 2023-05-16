import { useCallback, useState } from "react";
import { episodes } from "./util";
import { WrapperCard } from "./WrapperCard";
import CardPagination from "../../../components/cards/pagination/CardPagination";
import { Button, Card, Modal } from "react-bootstrap";
import "./style.css";
import { ButtonModal } from "../../../components/buttons/modal";
export const CardList = () => {
  const handleClick = useCallback((id: number) => {
    const index = episodes.findIndex((x) => x.id == id);
    setCurrentCardIndex(index);
    setShowModal(true);
  }, []);
  const cardsPerPage: number = 10;
  const [showModal, setShowModal] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleCardClick = (id: number) => {
    const index = episodes.findIndex((x) => x.id == id);
    setCurrentCardIndex(index);
    setShowModal(true);
  };

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
        <div className="top-section background-image row">
        
            <div className="col-md-6 col-sm-6 col-xs-12">
              <h1>{episodes[currentCardIndex].name}</h1>
              <h5>Age: {episodes[currentCardIndex].age}</h5>
              {/* Additional card content */}
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <img
                style={{ width: "310px", height: "192px" }}
                src={episodes[currentCardIndex].imgSrc}
              />
            </div>
          
        </div>
        <div className="bottom-section">
          <ButtonModal onClick={handlePrevCard}>{"<"}</ButtonModal>

          <ButtonModal onClick={handleCloseModal}>{"x"}</ButtonModal>

          <ButtonModal onClick={handleNextCard}>{">"}</ButtonModal>
        </div>
      </Modal>
    </WrapperCard>
  );
};
