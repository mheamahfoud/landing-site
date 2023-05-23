import { useCallback, useState } from "react";
import { episodes } from "./util";
import { WrapperCard } from "./WrapperCard";
import CardPagination from "../../../components/cards/pagination/CardPagination";
import ModalProject from "./ModalProject";
import LeftSectionModal from "../LeftSectionModal";


export const CardList = () => {
  const [showModal, setShowModal] = useState(false);
  const cardsPerPage: number = 24;
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleClick = useCallback((id: number) => {
    const index = episodes.findIndex((x) => x.id == id);
    setCurrentCardIndex(index);
    setShowModal(true);
  }, []);



  const handleNextCard = useCallback(() => {
    if (currentCardIndex < episodes.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  }, [currentCardIndex]);

  const handlePrevCard = useCallback(() => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  }, [currentCardIndex]);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <WrapperCard className="">
      <CardPagination
        cardsPerPage={cardsPerPage}
        cards={episodes}
        onClick={handleClick}
      ></CardPagination>
      <ModalProject
        title="The Cheetah Diaries"
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleNextCard={handleNextCard}
        handlePrevCard={handlePrevCard}
        items={episodes}
        currentCardIndex={currentCardIndex}
      >
        <div className="project-deteails-content" >
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
      </ModalProject>

    </WrapperCard >
  );
};
