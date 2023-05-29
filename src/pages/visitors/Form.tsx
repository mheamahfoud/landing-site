import FormikInputLabel from '../../components/formik/FormikInputLabel'
import { CustomCaptcha } from './components/CustomCaptcha';
import SubmitButton from './components/SubmitButton'
import { useFormikContext } from 'formik'


const Form = ({...props}) => {
    const {setCaptchaValue,setIsCaptchaValid,isCaptchaValid}=props;
    const { handleSubmit, isSubmitting, isValid, setFieldValue } = useFormikContext()
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

                <SubmitButton isSubmitting={isSubmitting} isValid={isValid} />
                <CustomCaptcha
                    setCaptchaValue={setCaptchaValue} setIsCaptchaValid={setIsCaptchaValid} isCaptchaValid={isCaptchaValid}
                />
            </div>
        </form>
    )
}

export default Form
