import { ProjectCard } from "../../../components/jobs/ProjectCard";
import CardPagination from "./Carousel";
import { Categories1 } from "./util";
import { WrapperCard } from "./WrapperCard";

export const CardMenu = () => {
  const handleClick = () => {};
  const cardsPerPage: number = 10;
  <div>
  <h1>Card Pagination Example</h1>

</div>
  return (
    <WrapperCard className="">
          <CardPagination cardsPerPage={cardsPerPage} cards={Categories1} />
      {/* {Categories1.map((item) => {
        return (
          <div
            className="col-lg-4 col-md-4 col-sm-6 col-xs-12"
            style={{ position: "relative", margin: "12px 0" }}
          >
            <ProjectCard
              key={item.id}
              onClick={handleClick}
              title={item.title}
              url={item.url?.Eps1}
              id={item.id}
            />
          </div>
        );
      })} */}
    </WrapperCard>
  );
};
