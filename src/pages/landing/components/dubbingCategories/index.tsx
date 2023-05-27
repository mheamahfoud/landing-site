import { styled } from "styled-components";
import SectionTitle from "../../../../components/titles/SectionTitle";
import { CardAlbum } from "../../../../components/cards/CardAlbum";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { DubbingAlbumPath } from "../../../../routing/RouteNames";
import { DubbingCategories } from "../../../../helpers";
import {
  desktop,
  laptop,
  mobile,
  smallMobile,
  tablet,
  xSmallMobile,
  xXSmallMobile,
  xxxSmallMobile,
  xxxxSmallMobile,
} from "../../../../responsive";

const Container = styled.div`
  position: relative;
  background: white;
  z-index: 2;
  margin: 10px 0;
`;

const Left = styled.div`
  ${xXSmallMobile({ alignItems: "start" })}
  ${xxxSmallMobile({ alignItems: "start" })}
  ${xxxxSmallMobile({ alignItems: "center", justifyContent:'center' })}

`;
const Bottom = styled.div`
  ${desktop({ gap: "90px" })}
  ${laptop({ gap: "90px" })}
  ${tablet({ gap: "25px" })}
`;
const TopContainerCard = styled.div`
  ${desktop({ gap: "90px" })}
  ${laptop({ gap: "90px" })}
  ${tablet({ justifyContent: "space-evenly" })}
  ${mobile({ justifyContent: "space-evenly" })}
  ${smallMobile({ justifyContent: "space-evenly" })}
  ${xSmallMobile({
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
  })}
  ${xXSmallMobile({
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
  })}
  ${xxxSmallMobile({
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
  })}
  ${xxxxSmallMobile({
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
  })}
`;
const BottomContainerCard = styled.div`
  ${desktop({ gap: "90px", marginLeft: "200px" })}
  ${laptop({ gap: "90px", marginLeft: "150px" })}
  ${tablet({ justifyContent: "space-evenly" })}
  ${mobile({ justifyContent: "space-evenly" })}
  ${smallMobile({ justifyContent: "space-evenly" })}
  ${xSmallMobile({
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
  })}
  ${xXSmallMobile({
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
  })}
  ${xxxSmallMobile({
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
  })}
  ${xxxxSmallMobile({
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
  })}
`;

const DubbingAlbum = () => {
  const navigate = useNavigate();
  const handleClick = useCallback((id: number) => {
    navigate(DubbingAlbumPath, {
      state: {
        url: DubbingCategories.find((x) => x.id == id)?.imgCover,
        id: id,
      },
    });
  }, []);
  return (
    <Container className="row d-flex justify-content-center ">
      <Left className="d-flex">
        <SectionTitle title={"Dubbing Album"} sectionNumber="03" />
      </Left>

      {
        <Bottom className="d-flex flex-column" style={{ gap: "20px" }}>
          <TopContainerCard className="d-flex flex-wrap ">
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
          </TopContainerCard>
          <BottomContainerCard className="d-flex flex-wrap ">
            {DubbingCategories.filter((x) => x.id <= 2).map((item) => {
              return (
                <CardAlbum
                  onClick={handleClick}
                  title={item.title}
                  url={item.url}
                  id={item.id}
                />
              );
            })}
          </BottomContainerCard>
        </Bottom>
      }
    </Container>
  );
};

export default DubbingAlbum;
