import { FC } from "react";
import {  styled } from "styled-components";
import {  xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../../../responsive";
const Content = styled.span`
white-space: nowrap;
  line-height: 20px;
  font-size: 15px;
 
  ${xSmallMobile({fontSize:'12px'})}
  ${xXSmallMobile({fontSize:'12px'})}
  ${xxxSmallMobile({fontSize:'12px'})}
  ${xxxxSmallMobile({fontSize:'12px'})}
`;
interface Props {
  names: string[];
}
export const ActorsName: FC<Props> = ({ names }) => {
  return (
    <div
      className="row "
      style={{
        fontSize: "9px",
        lineHeight: "32px",
        color: "#f8f6e1",
        marginTop: "15px",
      }}
    >
      {names.map((item) => {
        return (
          <Content className="col-lg-2 col-md-3 col-sm-4 col-6" style={{}}>
            {" "}
            {item}
          </Content>
        );
      })}
    </div>
  );
};
