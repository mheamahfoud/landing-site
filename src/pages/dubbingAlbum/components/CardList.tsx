import { useCallback, useState } from "react";
import { WrapperCard } from "./WrapperCard";
import CardPagination from "../../../components/cards/pagination/CardPagination";
import ModalProject from "./ModalProject";
import LeftSectionModal from "../LeftSectionModal";
import {
  getProjectCategory,
  getProjectDetails,
} from "../../../services/categories";
import { useQuery } from "react-query";
import Spinner from "../../../layout/components/loader";
import { toAbsoluteServerUrl } from "../../../helpers/AssetHelpers";

export const CardList = () => {
  const { isFetching, refetch, data } = useQuery(`${"DRAMA"}-${4}`, () => {
    return getProjectCategory(4);
  });

  const [showModal, setShowModal] = useState(false);
  const cardsPerPage: number = 24;
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const handleClick = useCallback((id: number) => {
    const index = data?.findIndex((x) => x.id == id.toString());
    alert(index)
    setCurrentCardIndex(index);
    setShowModal(true);
  }, []);
  const handleNextCard = useCallback(() => {
    if (currentCardIndex < data.length - 1) {
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
    <>
      {data && (
        <WrapperCard className="">
          <CardPagination
            cardsPerPage={cardsPerPage}
            cards={data}
            onClick={handleClick}
          ></CardPagination>
          {showModal && (
            <ModalProject
              title={data[currentCardIndex]?.info?.value}
              showModal={showModal}
              handleCloseModal={handleCloseModal}
              handleNextCard={handleNextCard}
              handlePrevCard={handlePrevCard}
              id={data[currentCardIndex]?.id}
              currentCardIndex={currentCardIndex} children={""}            ></ModalProject>
          )}
        </WrapperCard>
      )}
      {!data && (
        <div style={{ height: "400px" }}>
          <Spinner />
        </div>
      )}
    </>
  );
};
