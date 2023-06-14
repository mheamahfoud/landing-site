import React from "react";
import { Pagination } from "react-bootstrap";

import "./style.css";
import { ProjectCard } from "../ProjectCard";
import { setPagination } from "../../../pages/dubbingAlbum/core/categoryHelper";
// interface CardData {
//   id: number;
//   title: string;
//   imgSrc: string;
// }

interface CardPaginationProps {
  cardsPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  cards: any; //CardData[];
  onClick: (id: number) => void;
  categoryId: number;
}

const CardPagination: React.FC<CardPaginationProps> = ({
  cardsPerPage,
  setCurrentPage,
  currentPage,
  cards,
  onClick,
  categoryId,
}) => {
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards?.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const totalPageCount = Math.ceil(cards.length / cardsPerPage);

  const renderPaginationButtons = () => {
    const buttons = [];
    let maxButtonCount = 5; // max number of buttons to show
    let startPage = Math.max(1, currentPage - Math.floor(maxButtonCount / 2));
    let endPage = Math.min(totalPageCount, startPage + maxButtonCount - 1);

    if (endPage - startPage < maxButtonCount - 1) {
      startPage = Math.max(1, endPage - maxButtonCount + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => {
            handlePageChange(i);
            setPagination(i, categoryId);
          }}
        >
          {i}
        </Pagination.Item>
      );
    }

    return buttons;
  };

  return (
    <>
      <div className="pagination-container top">
        {cards.length > 24 && (
          <Pagination>
            <Pagination.First
              onClick={() => {
                setPagination(1, categoryId);
                handlePageChange(1);
              }}
            />
            <Pagination.Prev
              onClick={() => {
                setPagination(Math.max(1, currentPage - 1), categoryId);
                handlePageChange(Math.max(1, currentPage - 1));
              }}
            />
            {renderPaginationButtons()}
            <Pagination.Next
              onClick={() => {
                setPagination(
                  Math.min(totalPageCount, currentPage + 1),
                  categoryId
                );
                handlePageChange(Math.min(totalPageCount, currentPage + 1));
              }}
            />
            <Pagination.Last
              onClick={() => {
                handlePageChange(totalPageCount);
                setPagination(totalPageCount, categoryId);
              }}
            />
          </Pagination>
        )}
      </div>
      <div className="d-flex justify-content-center flex-wrap ">
        {currentCards.map((item) => (
          <div className="" style={{ position: "relative", margin: "12px 0" }}>
            <ProjectCard
              key={item.id}
              onClick={() => onClick(item.id)}
              title={item.info.value}
              url={item.image}
              id={item.id}
            />
          </div>
        ))}
      </div>
      <div className="pagination-container bottom">
        {cards.length > 24 && (
          <Pagination>
            <Pagination.First
              onClick={() => {
                handlePageChange(1);
                setPagination(1, categoryId);
              }}
            />
            <Pagination.Prev
              onClick={() => {
                handlePageChange(Math.max(1, currentPage - 1));
                setPagination(Math.max(1, currentPage - 1), categoryId);
              }}
            />
            {renderPaginationButtons()}
            <Pagination.Next
              onClick={() => {
                handlePageChange(Math.min(totalPageCount, currentPage + 1));
                setPagination(
                  Math.min(totalPageCount, currentPage + 1),
                  categoryId
                );
              }}
            />
            <Pagination.Last
              onClick={() => {
                handlePageChange(totalPageCount);
                setPagination(totalPageCount, categoryId);
              }}
            />
          </Pagination>
        )}
      </div>
    </>
  );
};

export default CardPagination;
