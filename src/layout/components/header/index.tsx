import { useCallback, useEffect, useState } from "react";
import "./index.css";
import LinkHeader from "./components/LinkHeader";
import IconLogo from "./components/IconLogo";
import IconLang from "./components/iconLang";
import { MenuItems } from "./util/constant";
import { styled } from "styled-components";
import { useAuth } from "../../../ContextProvider";
import { useNavigate } from "react-router-dom";

interface StyleProps {
  iscrolledtotop?: string;
}

const Container = styled.div<StyleProps>`
  height: 62px;
  width: 100%;
  background-color: ${(props) =>
    props.iscrolledtotop == "true" ? "" : "#1c1c1c"};
  z-index: 510;
  position: fixed;
  left: 0px;
  right: 0px;
  height: 62px;
  display: flex;
  justify-content: space-around;
`;
export const Header = () => {
  const navigate = useNavigate();
  const { currentPage, setCurrentPage, setLinkClicked } = useAuth();
  const handleClick = useCallback(
    (id: number, path: any) => {
      setLinkClicked(true);
      navigate(path);
      setCurrentPage(id);
      setTimeout(() => {
        setLinkClicked(false);
      }, 6000); // Set a dela
    },
    [currentPage]
  );

  const [isScrolledToTop, setIsScrolledToTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolledToTop(scrollTop === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Container iscrolledtotop={isScrolledToTop.toString()}>
        <div style={{ display: "flex" }}>
          <IconLogo />
          <IconLang />
        </div>
        <div className="MenuBar clearfix left-menu" id="">
          {MenuItems.map((item, index) => {
            return (
              <LinkHeader
                to={item.to}
                key={index}
                title={item.name}
                active={currentPage === item.id}
                value={item.id}
                onClick={handleClick}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
};
