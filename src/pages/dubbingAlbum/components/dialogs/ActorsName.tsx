import { FC } from "react";
interface Props {
  names: string[];
}
export const ActorsName: FC<Props> = ({ names }) => {
  return (
    <div
      className="row"
      style={{
        fontSize: "9px",
        lineHeight: "32px",
        color: "#f8f6e1",
        margin:'25px 0'
      }}
    >
      {names.map((item) => {
        return (
          <span
            className="col-lg-2 col-md-2 col-sm-3 col-6"
            style={{
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              lineHeight: "20px",
              fontSize: "13px",
            }}
          >
            {" "}
            {item}
          </span>
        );
      })}
    </div>
  );
};
