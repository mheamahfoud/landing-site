import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.a`
  width:35px;
  border-width: 0px;
  background-color: transparent;
  position: relative;
`;
interface Props {
  children: React.ReactNode;
  url :string
}
export const CustomLink: FC<Props> = ({ url ,children }) => {
  return <Container href={url} target="_blank">{children}</Container>;
};
