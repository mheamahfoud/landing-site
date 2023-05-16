import React from "react";
import { styled } from "styled-components";
interface Props {
  children: React.ReactNode;
  onClick:()=>void
}
const Container = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  color: #f8f6e1;
  background-color: #2b2b2b;
  font-family: Georgia, Palatino, Palatino Linotype, Times, Times New Roman,
    serif;
  line-height: 26px;
  font-size: 24px;
  border-radius: 50%;
  cursor: pointer;
`;
export const ButtonModal: React.FC<Props> = ({ children,onClick }) => {
  return <Container onClick={onClick}><p style={{ textTransform: 'none' }} onMouseDown={(event) => event.preventDefault()}>
    {children}
    
    </p></Container>;
};
