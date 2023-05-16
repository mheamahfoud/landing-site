import { styled } from "styled-components";
import SectionTitle from "../../../../components/titles/SectionTitle";
import { CardAlbum } from "../../../../components/cards/CardAlbum";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { DubbingAlbumPath } from "../../../../routing/RouteNames";
import { DubbingCategories } from "../../../../helpers";

const Container = styled.div`
  position: relative;
  background: white;
  width: 1300px;
  z-index: 2;
`;

const Left = styled.div`
  background-color: "red";
`;
const Bottom = styled.div`
  padding: 50px 0;
`;

const DubbingAlbum = () => {
  const navigate = useNavigate();
  const handleClick = useCallback((id: number) => {
    navigate(DubbingAlbumPath, {
      state: { url: DubbingCategories.find((x) => x.id == id)?.imgCover },
    });
  }, []);
  return (
    <Container className="row d-flex justify-content-center ">
      <Left className="">
        <SectionTitle title={"Dubbing Album"} sectionNumber="03" />
      </Left>

      {
        <Bottom
          className="d-flex flex-column "
          style={{
            gap: "150px",
          }}
        >
          <div
            className="d-flex"
            style={{
              gap: "150px",
            }}
          >
            {DubbingCategories.filter((x) => x.id < 3).map((item) => {
              return (
                <CardAlbum
                  onClick={handleClick}
                  title={item.title}
                  url={item.url}
                  id={item.id}
                />
              );
            })}
          </div>
          <div
            className="d-flex"
            style={{
              gap: "150px",
              margin: "0 150px",
            }}
          >
            {DubbingCategories.filter((x) => x.id > 2).map((item) => {
              return (
                <CardAlbum
                  onClick={handleClick}
                  title={item.title}
                  url={item.url}
                  id={item.id}
                />
              );
            })}
          </div>
        </Bottom>
      }
    </Container>
  );
};

export default DubbingAlbum;
