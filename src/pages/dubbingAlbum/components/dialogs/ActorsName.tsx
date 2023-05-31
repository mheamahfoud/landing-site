import { FC } from "react";
// import { styled } from "styled-components";
// import {
//   xSmallMobile,
//   xXSmallMobile,
//   xxxSmallMobile,
//   xxxxSmallMobile,
// } from "../../../../responsive";
import { Col, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

import { styled as sty } from "@mui/material";

const ColStyle = sty(Col)({
  whiteSpace: "nowrap",
  lineHeight: "20px",
  fontSize: "15px",

  // "@media ((min-width: 641px) and (max-width: 768px))": {
  //   fontSize: "12px"
  // },
  // "@media ((min-width: 569px) and (max-width: 640px))": {
  //   fontSize: "12px"
  // },
  // "@media ((min-width: 401px) and (max-width: 568px))": {
  //   fontSize: "12px"
  // },

  "@media ((max-width: 768px))": {
    fontSize: "12px" 
  },
});

// const Content = styled.span`
//   white-space: nowrap;
//   line-height: 20px;
//   font-size: 15px;

//   ${xSmallMobile({ fontSize: "12px" })}
//   ${xXSmallMobile({ fontSize: "12px" })}
//   ${xxxSmallMobile({ fontSize: "12px" })}
//   ${xxxxSmallMobile({ fontSize: "12px" })}
// `;
interface Props {
  names: string[];
}
export const ActorsName: FC<Props> = ({ names }) => {
  const getColumns = () => {
    const matchesLG = useMediaQuery({ minWidth: 1200 });
    const matchesMD = useMediaQuery({ minWidth: 992 });
    const matchesSM = useMediaQuery({ minWidth: 768 });
    const matchesXSM = useMediaQuery({ minWidth: 568 });
    if (matchesLG) {
      return 2;
    } else if (matchesMD) {
      return 2;
    } else if (matchesSM) {
      return 3;
    } 
    else if(matchesXSM){
      return 4;
    }
    else {
      return 6;
    }
  };

  const renderColumns = () => {
    const columns = getColumns();
    const chunkedArray = chunkArray(names, columns);

    return chunkedArray.map((column, index) => (
      <ColStyle lg={2} md={3} sm={4} xs={6} key={index}>
        {column.map((name, i) => (
          <div key={i}>{name}</div>
        ))}
      </ColStyle>
    ));
  };

  const chunkArray = (array, columns) => {
    const chunkSize = Math.ceil(array.length / (12 / columns));
    const chunkedArray = [];
    let index = 0;

    while (index < array.length) {
      chunkedArray.push(array.slice(index, index + chunkSize));
      index += chunkSize;
    }

    return chunkedArray;
  };

  return (
    <Row
    className="d-flex justify-content-between"
      style={{
        fontSize: "9px",
        lineHeight: "32px",
        color: "#f8f6e1",
        marginTop: "15px",
      }}
    >
      {renderColumns()}
      {/* {names.map((item) => {
        return (
          <Content className="col-lg-2 col-md-3 col-sm-4 col-6" style={{}}>
            {" "}
            {item}
          </Content>
        );
      })} */}
    </Row>
  );
};
