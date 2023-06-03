import  { FC } from 'react';
import { ButtonModal } from '../../../../components/buttons/modal';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    transition: opacity 0.3s;
    bottom: -40px;
    z-index: 10;
    position: absolute;
    width: 20%;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 230px;
    /* @media ((min-width: 540px) and (max-width: 640px)) {


    };
    @media ((max-width: 540px)) {
    width: 50%;

    }; */



`;
interface Props {
    handlePrevCard: () => void,
    handleCloseModal: () => void,
    handleNextCard: () => void,
}
const ButtonSection: FC<Props> = ({ handleNextCard, handleCloseModal, handlePrevCard }) => {
    return (
        <Container>
            <ButtonModal onClick={handlePrevCard}>{"<"}</ButtonModal>

            <ButtonModal onClick={handleCloseModal}>
                {<span>&times;</span>}
            </ButtonModal>

            <ButtonModal onClick={handleNextCard}>{">"}</ButtonModal>
        </Container>
    );
}

export default ButtonSection;
