import { FC, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import TitleForm from "./components/TitleForm";
import Form from "./Form";
import { Formik } from "formik";

import { roleSchema } from "./validationRule";
import { sendEmail, verifyToken } from "../../services/email";

interface FormValues {
  name: string;
  email: string;
  msg: string;
  company: string;
  phone: string;
  custom: string;
  captcha: string;
  generatedCaptcha: string;
}


export const VisitorInfo: FC = () => {
  const location = useLocation();
  const { url } = location.state;
  const captchaRef = useRef(null)
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (values: FormValues, { resetForm }: any) => {
    let token = captchaRef.current.getValue();

    if (token) {

      let valid_token = await verifyToken(token);
      if (valid_token) {
        setMessage("Hurray!! you have submitted the form");
        await sendEmail(values)
      } else {
        setError("Sorry!! Token invalid");
      }
    }
    else {
      setError("You must confirm you are not a robot");


    }
  };
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
        {
          error && <p className='textError'>Error!! {error}</p>
        }
        {
          message && <p className='textSuccess'>Success!! {message}</p>
        }
        <Formik

          enableReinitialize={false}
          validationSchema={roleSchema}
          validateOnChange={false} // Disable validation on change
          validateOnBlur={false} // Disable validation on blur
          initialValues={{ name: '', email: '', msg: '', phone: '', company: '', custom: '', captcha: '', generatedCaptcha: '' }}
          initialStatus={{ edit: false }}
          onSubmit={handleSubmit}
        >

          <Form captchaRef={captchaRef} />
        </Formik>



      </div>
    </div>
  );
};
