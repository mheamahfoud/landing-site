import { styled } from "styled-components";
import { mobileFontSize } from "../../../../responsive";
const Container = styled.div`
       text-align: center;
    color: #F15722;
    background-color: transparent;
    font-family: roboto, sans-serif;
    font-weight: 400;

    ${mobileFontSize({fontSize:'12px',lineHeight:'14px'})}

`;
export const CopyRight = () => {
  return (

    <Container
      className="d-flex flex-column"
    >
      <p id="">NIS. New Interactive Studio</p>
      <p id="">2022 ©</p>
    </Container>

  );
};
