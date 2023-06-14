import { FC, useCallback, useState } from "react";
import { WrapperCard } from "./WrapperCard";
import CardPagination from "../../../../components/cards/pagination/CardPagination";
import ModalProject from "../dialogs";
import { getProjectCategory } from "../../../../services/categories";
import { useQuery } from "react-query";
import Spinner from "../../../../layout/components/loader";
import { Categories } from "../../../../helpers/Constants";
import { Heights } from "./height";
import { getCurrentPage } from "../../core/categoryHelper";
// import { toAbsoluteServerUrl } from "../../../helpers/AssetHelpers";
interface Props {
  category_id: number;
}
export const CardList: FC<Props> = ({ category_id }) => {
  const { data } = useQuery(`${"category_id"}-${category_id}`, () => {
    return getProjectCategory(category_id);
  });
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(getCurrentPage(category_id));
  const cardsPerPage: number = 24;
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const handleClick = useCallback(
    (id: number) => {
      if (data) {
        const index = data?.findIndex((x) => x.id == id);
        setCurrentCardIndex(index);
        setShowModal(true);
      }
    },
    [showModal, currentCardIndex, data]
  );

  const handleNextCard = useCallback(() => {
    if (data) {
      console.log(currentCardIndex);
      console.log((currentPage - 1) * cardsPerPage);
      console.log(currentPage * cardsPerPage);
      if (
        currentCardIndex >= (currentPage - 1) * cardsPerPage &&
        currentCardIndex < currentPage * cardsPerPage - 1 &&
        currentCardIndex < data.length - 1
      ) {
        setCurrentCardIndex(currentCardIndex + 1);
      } else {
        setCurrentCardIndex((currentPage - 1) * cardsPerPage);
      }
    }
  }, [currentCardIndex, data]);

  const handlePrevCard = useCallback(() => {
    if (data) {
      if (
        currentCardIndex > (currentPage - 1) * cardsPerPage &&
        currentCardIndex < currentPage * cardsPerPage
      ) {
        setCurrentCardIndex(currentCardIndex - 1);
      } else {
        if (cardsPerPage < data.length) {
          setCurrentCardIndex(currentPage * cardsPerPage - 1);
        } else {
          setCurrentCardIndex(currentPage * data.length - 1);
        }
      }
    }
  }, [currentCardIndex, data]);

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
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            categoryId={category_id}
          ></CardPagination>
          {showModal && (
            <ModalProject
              title={data[currentCardIndex]?.info?.value}
              showModal={showModal}
              handleCloseModal={handleCloseModal}
              handleNextCard={handleNextCard}
              handlePrevCard={handlePrevCard}
              id={data[currentCardIndex]?.id}
              category_id={category_id}
              currentCardIndex={currentCardIndex}
              height={
               (category_id == Categories.Drama 
              )? Heights?.large :   (category_id == Categories.Film||  category_id == Categories.Cartoon)? Heights?.medium
                  : Heights?.small
              }
            />
          )}
        </WrapperCard>
      )}
      {!data && (
        <div style={{ height: "400px", width: "100%", position: "relative" }}>
          <Spinner />
        </div>
      )}
    </>
  );
};
