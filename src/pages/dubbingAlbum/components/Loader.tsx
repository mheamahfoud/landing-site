import { MainColor } from "../../../helpers";
import { Spinner } from "react-bootstrap";

export const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-start  background-image "
      style={{ height: "100%" }}
    >
      <Spinner style={{ color: MainColor }} />
    </div>
  );
};
