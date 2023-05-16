import React, { useState } from "react";
import { Card, Pagination } from "react-bootstrap";
import { ProjectCard } from "../../../../components/jobs/ProjectCard";
import './style.css'
interface CardData {
  id: number;
  title: string;
  imgSrc: string;
}

interface CardPaginationProps {
  cardsPerPage: number;
  cards: CardData[];
}

const CardPagination: React.FC<CardPaginationProps> = ({
  cardsPerPage,
  cards,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const handleClick = () => {};
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
          onClick={() => handlePageChange(i)}
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
        <Pagination>
          <Pagination.First onClick={() => handlePageChange(1)} />
          <Pagination.Prev
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          />
          {renderPaginationButtons()}
          <Pagination.Next
            onClick={() =>
              handlePageChange(Math.min(totalPageCount, currentPage + 1))
            }
          />
          <Pagination.Last onClick={() => handlePageChange(totalPageCount)} />
        </Pagination>
      </div>
      <div className="d-flex justify-content-center flex-wrap row">
        {currentCards.map((item, index) => (
          <div
            className="col-lg-4 col-md-4 col-sm-6 col-xs-12"
            style={{ position: "relative", margin: "12px 0" }}
          >
            <ProjectCard
              key={item.id}
              onClick={handleClick}
              title={item.title}
              url={item.imgSrc}
              id={item.id}
            />
          </div>
        ))}
      </div>
      <div className="pagination-container bottom">
        <Pagination>
          <Pagination.First onClick={() => handlePageChange(1)} />
          <Pagination.Prev
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          />
          {renderPaginationButtons()}
          <Pagination.Next
            onClick={() =>
              handlePageChange(Math.min(totalPageCount, currentPage + 1))
            }
          />
          <Pagination.Last onClick={() => handlePageChange(totalPageCount)} />
        </Pagination>
      </div>
    </>
  );
};

export default CardPagination;
