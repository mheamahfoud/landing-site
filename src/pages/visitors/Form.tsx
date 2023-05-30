import FormikInputLabel from '../../components/formik/FormikInputLabel'
import SubmitButton from './components/SubmitButton'
import { useFormikContext } from 'formik'
import ReCAPTCHA from "react-google-recaptcha"


const Form = ({ ...props }) => {
    const { captchaRef } = props;
    const { handleSubmit, isSubmitting, isValid } = useFormikContext()
    return (
        <form className='form' onSubmit={handleSubmit} noValidate>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', margin: '20px 0' }}>
                <FormikInputLabel
                    title="Enter Name"
                    name={'name'}
                />
                <FormikInputLabel
                    title="Enter Phone Number"
                    name={'phone'}
                />
                <FormikInputLabel
                    title="Enter Email"
                    name={'email'}
                />

                <FormikInputLabel
                    title="Enter Your Company Name"
                    name={'company'}
                />

                <FormikInputLabel
                    title="Country"
                    name={'custom'}
                />
                <FormikInputLabel
                    title="Write Your Message"
                    name={'msg'}
                />


            </div>
            <div>


            </div>
            <div>
                <div className='formGroup'>
                    <ReCAPTCHA sitekey={ import.meta.env.VITE_REACT_SITE_KEY} ref={captchaRef} />
                </div>

                <SubmitButton isSubmitting={isSubmitting} isValid={isValid} />
            </div>
        </form>
    )
}

export default Form
