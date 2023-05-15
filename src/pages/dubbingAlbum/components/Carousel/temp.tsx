import React, { useState } from "react";
import { Card, Pagination } from "react-bootstrap";
import { ProjectCard } from "../../../../components/jobs/ProjectCard";

interface Card {
  id: number;
  title: string;
  imgSrc: string;
}

interface CardPaginationProps {
  cardsPerPage: number;
  cards: Card[];
}
const handleClick = () => {};
export const CardPagination: React.FC<CardPaginationProps> = ({
  cardsPerPage,
  cards,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleClick = () => {};
  // Logic to calculate the indexes of the cards to display on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  // Function to handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
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
      <Pagination>
        {Array.from({ length: Math.ceil(cards.length / cardsPerPage) }).map(
          (_, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          )
        )}
      </Pagination>
    </>
  );
};
