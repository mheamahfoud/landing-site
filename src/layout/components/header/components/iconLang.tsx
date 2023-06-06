import "./iconLang.css";
import IconLAngImg from "../../../../assets/images/icon-languages.png";
import { styled } from "styled-components";
import { useEffect, useRef, useState } from "react";
import EgFlag from '../../../../assets/images/lang/eg.svg';
import ENFlag from '../../../../assets/images/lang/us.svg'
import { setLanguage } from "../../../../i18n/Metronici18n";
const Container = styled.div`
  z-index: 580;
  height: 44px;
  position: relative;
  top: 10px;
  margin: 0 20px;
  cursor: pointer;
`;
const ImageContainer = styled.img`
  border: 0px;
  border-style: solid;
  -webkit-transform-origin: left top;
  -ms-transform-origin: left top;
  -o-transform-origin: left top;
  transform-origin: left top;
`;
const IconLang = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };
  const menuItems = [
    { id: 1, key: "en" ,src : ENFlag},
    { id: 2, key: "ar" ,src : EgFlag},

  ];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <Container className="" ref={dropdownRef}>
      <ImageContainer src={IconLAngImg} alt="Icon" onClick={toggleMenu} />
      {isOpen && (
        <ul className="menu-options">
          {menuItems.map((item) => (
            <li key={item.id} onClick={() => { 
              setLanguage(item.key)
             }}>
              <img src={item.src} alt="Flag" className="flag-image" style={{ width: "40px" }} />
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};
export default IconLang;
