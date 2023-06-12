import "./iconLang.css";
import IconLAngImg from "../../../../assets/images/icon-languages.png";
import { styled } from "styled-components";
import { useEffect, useRef, useState } from "react";
import EgFlag from "../../../../assets/images/lang/eg.svg";
import ENFlag from "../../../../assets/images/lang/us.svg";
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

interface Props {
  isOpen:boolean
}
const MenuOPtios = styled.ul<Props>`
 opacity:${(props)=>props.isOpen ? 1:0};
  transition:opacity 1s linear;
  position: absolute;
  top: 0;
  left: 100%;
  padding: 5px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  list-style-type: none;
`;
const MenuList = styled.li`
  cursor: pointer;
  padding: 5px;
  & :hover {
    background-color: #f0f0f0;
  }
`;

const IconLang = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };
  const menuItems = [
    { id: 1, key: "en", src: ENFlag },
    { id: 2, key: "ar", src: EgFlag },
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
      <ImageContainer src={IconLAngImg} alt="Icon" onClick={toggleMenu}  onMouseOver={toggleMenu}  />
      {isOpen && (
        <MenuOPtios isOpen={isOpen} onMouseLeave={()=>{setIsOpen(!isOpen)}}>
          {menuItems.map((item) => (
            <MenuList
              key={item.id}
              onClick={() => {
                setLanguage(item.key);
              }}
            >
              <img
                src={item.src}
                alt="Flag"
                className="flag-image"
                style={{ width: "40px" }}
              />
            </MenuList>
          ))}
        </MenuOPtios>
      )}
    </Container>
  );
};
export default IconLang;
