import { useFormikContext } from 'formik';
import { styled } from "@mui/material";
import { TextField } from "@mui/material";
const InputStyle = styled(TextField)({
    width: '600px',
    '@media (max-width: 780px)': {
        width: '288px'
    }


})
interface props {
    title: string,
    name: string,
}
const FormikInputLabel = (props: props) => {
    const { title, name } = props;
    const { errors, getFieldProps, isSubmitting,touched } = useFormikContext();
    return (
        <InputStyle
            placeholder={title}
            variant="standard"
            {...getFieldProps({ name })}
            error={ errors[name]&& touched[name] }
            helperText={touched[name] && errors[name]  ? errors[name] : ''}
            // sx={{
            //     '.MuiInputBase-input':{
            //         color: errors[name]  && '#d32f2f'
            //     }
            // }}
            disabled={isSubmitting}
        />



    );
}

export default FormikInputLabel;
