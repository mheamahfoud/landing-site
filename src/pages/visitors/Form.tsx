import FormikInputLabel from '../../components/formik/FormikInputLabel'
import SubmitButton from './components/SubmitButton'
import { useFormikContext } from 'formik'
import ReCAPTCHA from 'react-google-recaptcha';

const Form = () => {
    const { handleSubmit, isSubmitting, isValid} = useFormikContext()
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
                <div>
                    <ReCAPTCHA sitekey="6Len9EkmAAAAAH2LTiDjsxLakr-_w44nFiJDXpAN" />
                </div>
                <SubmitButton isSubmitting={isSubmitting} isValid={isValid} />

            </div>
        </form>
    )
}

export default Form
