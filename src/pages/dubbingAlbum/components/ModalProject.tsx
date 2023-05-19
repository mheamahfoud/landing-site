import { ButtonModal } from "../../../components/buttons/modal";
import LeftSectionModal from "../LeftSectionModal";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import "./style.css";
const Title = styled.h3`
    color: #FFFFFF;
    background-color: transparent;
    position: relative;
`;
interface Props {
    showModal:boolean,
    currentCardIndex:number,
    title:string,
    items :any[],
    handleCloseModal:()=>void,
    handlePrevCard:()=>void,
    handleNextCard:()=>void,
    children:React.ReactNode

}
const ModalProject : React.FC<Props>= ({children,title,showModal,handleCloseModal,handlePrevCard,handleNextCard}) => {

    return (
        <Modal
            show={showModal}
            onHide={handleCloseModal}
            dialogClassName="custom-modal"
            centered
        >
            <div className="top-section-project-details background-image">
                <div >
                    <Title>{title}</Title>
                </div>
               {children}
            </div>
            <div className="bottom-section">
                <ButtonModal onClick={handlePrevCard}>{"<"}</ButtonModal>

                <ButtonModal onClick={handleCloseModal}>{<span>&times;</span>}</ButtonModal>

                <ButtonModal onClick={handleNextCard}>{">"}</ButtonModal>
            </div>
        </Modal>
    );
}

export default ModalProject;
