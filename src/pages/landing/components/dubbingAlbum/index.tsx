import { styled } from "styled-components";
import SectionTitle from "../../../../components/titles/SectionTitle";
import { CardAlbum } from "../../../../components/jobs/CardAlbum";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { DubbingAlbumPath } from "../../../../routing/RouteNames";
import DramaIcon from "../../../../assets/images/categories/drama-cat.png";
import CartoonIcon from "../../../../assets/images/categories/cartoon-cat-fr.png";
import DocumentryIcon from "../../../../assets/images/categories/documentar-paner.png";
import FilmIcon from "../../../../assets/images/categories/cinema-paner.png";


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

const Categories = [
  {
    id: 1,
    title: "Drama",
    imgCover:DramaIcon,
   //   "https://www.nistudio.net/images/drama%20paner-u6051-fr.png?crc=3883617876",
    url: "https://www.nistudio.net/images/poster%20drama-u1081727-fr.jpg?crc=4159388539",
  },
  {
    id: 2,
    title: "Documentry",
    imgCover:DocumentryIcon,
    //  "https://www.nistudio.net/images/documentary%20paner.jpg?crc=223687052",
    url: "https://www.nistudio.net/images/poster%20doc-u1081789-fr.png?crc=524136838",
  },
  {
    id: 3,
    title: "Carton",
    imgCover:CartoonIcon,
     // "https://www.nistudio.net/images/cartoon%20paner-u255796-fr.png?crc=400263042",
    url: "https://www.nistudio.net/images/poster%20cartoon-u1081854-fr.png?crc=325150193",
  },
  {
    id: 4,
    title: "Film",
    imgCover:FilmIcon,
     // "https://www.nistudio.net/images/cinema%20paner-u286605-fr.png?crc=3913572946",
    url: "https://www.nistudio.net/images/poster%20cinema-u1081919-fr.png?crc=4078020110",
  },
];
const DubbingAlbum = () => {
  const navigate = useNavigate();
  const handleClick = useCallback((id: number) => {
    navigate(DubbingAlbumPath, {
      state: { url: Categories.find((x) => x.id == id)?.imgCover },
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
              {Categories.filter(x=>x.id <3).map((item) => {
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
              {Categories.filter(x=>x.id >2).map((item) => {
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
