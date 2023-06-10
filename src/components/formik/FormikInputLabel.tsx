import { useFormikContext } from 'formik';
import { styled } from "@mui/material";
import { TextField } from "@mui/material";
import React from 'react';
import { getConfig } from '../../i18n/Metronici18n';
const InputStyle = styled(TextField)({
    width: '600px',
    '@media (max-width: 780px)': {
        width: '288px'
    },
    '& .Mui-error':{
        textAlign:getConfig().selectedLang =='ar' ? 'right' :'left'
    }
})
interface props {
    title: string,
    name: string,
}
const FormikInputLabel = (props: props) => {
    const { title, name } = props;
    const { errors,  touched ,isSubmitting,getFieldProps} = useFormikContext();
    React.useEffect(() => {
        if(name=='email'){
            const emailInput = document.getElementById(name);
            if (emailInput) {
              emailInput.setAttribute('autocomplete', 'new-email');
            }
        }
        else if (name=='name'){
            const emailInput = document.getElementById(name);
            if (emailInput) {
              emailInput.setAttribute('autocomplete', 'new-name');
            }
        }
        else{
            const input = document.getElementById(name);
            if (input) {
                input.setAttribute('autocomplete', 'off');
            }
        }
    
    }, []);
    return (
        <InputStyle
            placeholder={title}
            id={name}
            variant="standard"
              {...getFieldProps({ name })}
            error={errors[name] && touched[name]}
            helperText={touched[name] && errors[name] ? errors[name] : ''}
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

