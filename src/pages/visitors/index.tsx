import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import TitleForm from "./components/TitleForm";
import * as Yup from 'yup'
import Form from "./Form";
import { Formik } from "formik";
import { sendEmail } from "../../services/email";


export const roleSchema = Yup.object().shape({
  name: Yup.string()
    .required('Field is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    custom: Yup.string()
    .required('Field is required'),
  msg: Yup.string()
    .required('Field is required'),
    phone: Yup.string()
    .required('Field is required'),
  company: Yup.string()
    .required('Field is required'),

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

        <Formik
          enableReinitialize={true}
          validationSchema={roleSchema}
          initialValues={{}}
          initialStatus={{ edit: false }}
          onSubmit={async (values, { setSubmitting}) => {
            setSubmitting(true)
            try {
            await sendEmail(values)
            //  resetForm();

            } catch (ex) {

            } finally {
              setSubmitting(true)
            }

          }}
          // onReset={(values) => {
          //   console.log('Formik onReset');
          // }}
        >

          <Form />
        </Formik>



      </div>
    </div>
  );
};
