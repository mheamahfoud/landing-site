import { styled } from "styled-components";
import SectionTitle from "../../../../components/titles/SectionTitle";
import { CardAlbum } from "../../../../components/jobs/SquareCard";

const Container = styled.div`
  position: relative;
  background: white;
  width: 1300px;
  z-index:2;
`;

const Left = styled.div`
  background-color: "red";
`;
const Bottom = styled.div`
  padding: 50px 0;
`;

const DubbingAlbum = () => {
  return (
    <Container
      className="row d-flex justify-content-center "
    
    >
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
            <CardAlbum
              title={"Drama"}
              url={
                "	https://www.nistudio.net/images/poster%20drama-u1081727-fr.jpg?crc=4159388539"
              }
            />
            <CardAlbum
              title={"Documentry"}
              url={
                "https://www.nistudio.net/images/poster%20doc-u1081789-fr.png?crc=524136838"
              }
            />
          </div>
          <div
            className="d-flex"
            style={{
              gap: "150px",
              margin: "0 150px",
            }}
          >
            <CardAlbum
              title={"Carton"}
              url={
                "https://www.nistudio.net/images/poster%20cartoon-u1081854-fr.png?crc=325150193"
              }
            />

            <CardAlbum
              title={"Film"}
              url={
                "https://www.nistudio.net/images/poster%20cinema-u1081919-fr.png?crc=4078020110"
              }
            />
          </div>
        </Bottom>
      }
    </Container>
  );
};

export default DubbingAlbum;
