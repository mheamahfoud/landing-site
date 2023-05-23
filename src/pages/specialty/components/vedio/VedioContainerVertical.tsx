import React, { FC } from "react";
import styled from "styled-components";
import YouTubeVideo from "./Youtube";
import {  vedioResponsive } from "../../../../responsive";

interface Props {
  vedioId: string;
  title: string;
  children: React.ReactNode;
}
const VedioTitle = styled.div`
  font-size: 18px;
  line-height: 21px;

  margin: 0;
  color: #7f7f7f;
`;
const Title = styled.span`
  border-style: solid;
  border-bottom-width: 2px;
  border-color: #f7931e;
  border-top-width: 0;
  border-left: 0;
  border-right: none;
  display: inline-block;
  padding-bottom: 5px;
`;
const Container = styled.div`
  justify-content: space-between;
  ${vedioResponsive({
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  })}
`;
export const VedioContainerVertical: FC<Props> = ({
  vedioId,
  title,
  children,
}) => {
  return (
    <Container className="d-flex  mb-5">
      <div
        className="d-flex flex-column"
        style={{ margin: "1.4rem   1.4rem ", gap: "1.4rem"  , textAlign:'center'}}
      >
        <VedioTitle>
          <Title>{title}</Title>{" "}
        </VedioTitle>
        <div className="d-flex justify-content-center align-items-center">
          <YouTubeVideo videoId={vedioId} />
        </div>
      </div>
      <div >{children}</div>
    </Container>
  );
};
