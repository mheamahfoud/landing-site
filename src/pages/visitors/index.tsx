import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import TitleForm from "./components/TitleForm";
import Form from "./Form";
import { Formik } from "formik";
import { sendEmail } from "../../services/email";
import { CustomCaptcha } from "./components/CustomCaptcha";
import { roleSchema } from "./validationRule";

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
  const [captchaValue, setCaptchaValue] = useState('');
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  useEffect(() => {
    alert(captchaValue)
  }, [captchaValue]);
  const handleSubmit = async (values: FormValues, { resetForm }: any) => {
    alert(isCaptchaValid)
    if (values.captcha !== values.generatedCaptcha) {
      return;
    }
    //  await sendEmail(values)
    resetForm();
    // Implement your email sending logic here
    console.log('Email sent!');
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

        <Formik

          enableReinitialize={true}
          validationSchema={roleSchema}
          validateOnChange={false} // Disable validation on change
          validateOnBlur={false} // Disable validation on blur
          initialValues={{ name: '', email: '', msg: '', phone: '', company: '', custom: '', captcha: '', generatedCaptcha: '' }}
          initialStatus={{ edit: false }}
          onSubmit={handleSubmit}
        // onSubmit={async (values, { setSubmitting}) => {
        //   if (values.captcha !== values.generatedCaptcha) {
        //     return;
        //   }
        //   setSubmitting(true)
        //   try {
        //   await sendEmail(values)
        //   //  resetForm();

        //   } catch (ex) {

        //   } finally {
        //     setSubmitting(true)
        //   }

        // }}
        // onReset={(values) => {
        //   console.log('Formik onReset');
        // }}
        >

          <Form setCaptchaValue={setCaptchaValue} isCaptchaValid={isCaptchaValid}   setIsCaptchaValid={setIsCaptchaValid} />
        </Formik>

      

      </div>
    </div>
  );
};
