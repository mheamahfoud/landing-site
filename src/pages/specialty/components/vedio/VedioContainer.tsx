import React, { FC } from "react";
import styled from "styled-components";

import YouTubeVideo from "./Youtube";
import {vedioResponsive } from "../../../../responsive";
import { useMediaQuery } from "react-responsive";
import { VedioContainerVertical } from "./VedioContainerVertical";

interface Props {
  vedioId: string;
  title: string;
  children: React.ReactNode;
}
const VedioTitle = styled.div`
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

export const VedioContainer: FC<Props> = ({ vedioId, title, children }) => {
  const isXSmallercreen = useMediaQuery({ maxWidth: 860 });
  return (
    <>
      {!isXSmallercreen && (
        <Container className="d-flex  mb-5">
          <div className="d-flex  flex-column" style={{ margin: "0  1.4rem " ,width:'400px' }}>
            <VedioTitle className="fs-4 fw-bold">
              <Title>{title}</Title>{" "}
            </VedioTitle>
            {children}
          </div>
          <YouTubeVideo videoId={vedioId} />
        </Container>
      )}
      {isXSmallercreen && (
        <VedioContainerVertical title={title} vedioId={vedioId}>
          {children}
        </VedioContainerVertical>
      )}
    </>
  );
};
