import { useCallback, useEffect, useState } from "react";
import "./index.css";
import LinkHeader from "./components/LinkHeader";
import IconLogo from "./components/IconLogo";
import IconLang from "./components/iconLang";
import { MenuItems } from "./util/constant";
import { styled } from "styled-components";
import React from "react";

interface StyleProps {
  iscrolledtotop?: string;
} 

const Container = styled.div<StyleProps>`
  height: 62px;
    width: 100%;
    background-color: ${(props) => props.iscrolledtotop =="true"? '' : '#1c1c1c'};
    z-index: 510;
    position: fixed;
    left: 0px;
    right: 0px;
    height: 62px;
    display: flex;
    justify-content: space-around;
`;
export const Header = () => {
  const handleClick = useCallback((id) => {
    setActiveItem(id);
  }, []);
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolledToTop(scrollTop === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  const [activeItem, setActiveItem] = useState(null);
  return (
    <>
      <Container iscrolledtotop ={isScrolledToTop.toString()}>
        <div style={{ display: 'flex' }}>
          <IconLogo />
          <IconLang />
        </div>
        <div className="MenuBar clearfix left-menu" id="">
          {MenuItems.map((item, index) => {
            return (
              <LinkHeader
                key={index}
                title={item.name}
                active={activeItem === item.id}
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
