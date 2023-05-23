import styled from "styled-components";
import { Modal } from "react-bootstrap";
import { MenuItems } from "../../util/constant";
import LinkHeader from "../LinkHeader";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../../ContextProvider";
import CloseButton from "./CloseButton";
import "./style.css";
import IconLogo from "../IconLogo";

const Container = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #2B2B2B;
      gap: 30px;
`;
interface Props {
  showModal: boolean,
  setShowModal: Dispatch<SetStateAction<boolean>>
}
const ModalMenu: React.FC<Props> = ({ showModal, setShowModal }) => {
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
    console.log(isScrolledToTop)
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
    <Modal
      show={showModal}
      onHide={() => { setShowModal(false) }}
      dialogClassName="custom-modal-dialog"
      className=""
      style={{
        position: 'fixed',
        left: '0',
        top: '0',
        backgroundColor: '#2B2B2B',
        border: 'none',
      
    
      }}
    >

      <Container className="d-flex flex-column justify-content-center align-items-center" >
        <CloseButton onClick={() => { setShowModal(false) }} />
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

        <IconLogo />

      </Container>

    </Modal>
  );
}

export default ModalMenu;
