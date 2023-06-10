import { useIntl } from 'react-intl'
import FormikInputLabel from '../../components/formik/FormikInputLabel'
import SubmitButton from './components/SubmitButton'
import { useFormikContext } from 'formik'
import ReCAPTCHA from "react-google-recaptcha"


const Form = ({ ...props }) => {
    const intl = useIntl();
    const { captchaRef } = props;
    const { handleSubmit, isSubmitting, isValid } = useFormikContext()
    return (
        <form className='form' onSubmit={handleSubmit} noValidate>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', margin: '20px 0' }}>
                <FormikInputLabel
                    title={intl.formatMessage({ id: 'enter_object' }, { name: intl.formatMessage({ id: 'name' }) })}
                    name={'name'}
                />
                <FormikInputLabel
                    title={intl.formatMessage({ id: 'enter_object' }, { name: intl.formatMessage({ id: 'phone_number' }) })}
                    name={'phone'}
                />
                <FormikInputLabel
                    title={intl.formatMessage({ id: 'enter_object' }, { name: intl.formatMessage({ id: 'email' }) })}
                    name={'email'}
                />

                <FormikInputLabel
                    title={intl.formatMessage({ id: 'enter_object' }, { name: intl.formatMessage({ id: 'company_name' }) })}
                    name={'company'}
                />

                <FormikInputLabel
                    title={intl.formatMessage({ id: 'enter_object' }, { name: intl.formatMessage({ id: 'country' }) })}
                    name={'custom'}
                />
                <FormikInputLabel
                    title={intl.formatMessage({ id: 'write_your_msg' })}
                    name={'msg'}
                />


            </div>
            <div>


            </div>
            <div>
                <div className='formGroup'>
                    <ReCAPTCHA sitekey={import.meta.env.VITE_REACT_SITE_KEY} ref={captchaRef} />
                </div>

                <SubmitButton isSubmitting={isSubmitting} isValid={isValid} />
            </div>
        </form>
    )
}

export default Form
