import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import TitleForm from "./components/TitleForm";
import { styled } from "@mui/material";
import { TextField } from "@mui/material";
import SubmitButton from "./components/SubmitButton";

const InputStyle = styled(TextField)({
  width: '600px',
  '@media (max-width: 780px)': {
    width: '288px'
  }
  
  
})
export const VisitorInfo: FC = () => {
  const location = useLocation();
  const { url } = location.state;
  return (
    <div>
      {" "}
      <Header url={url} />
      <div
        className="d-flex justify-content-center flex-column"
        style={{
          position: "relative",
          background: "white",
          zIndex: "2",
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center'
        }}
      >
        <TitleForm />

        <div style={{display:'flex', flexDirection:'column',gap:'25px' , margin:'20px 0'}}>
          <InputStyle
            placeholder="Enter Name"
            variant="standard"
          />
          <InputStyle
            placeholder="Enter Phone Number"
            variant="standard"
          />
          <InputStyle
            placeholder="Enter Email"
            variant="standard"
          />
          <InputStyle
            placeholder="Default"
            variant="standard"
          />
          <InputStyle
            placeholder="Enter Your Company Name"
            variant="standard"
          />
          <InputStyle
            placeholder="Country"
            variant="standard"
          />
          <InputStyle
            placeholder="Write Your Message"
            variant="standard"
          />
        </div>
        <div>
          <SubmitButton/>
        </div>

      </div>
    </div>
  );
};
