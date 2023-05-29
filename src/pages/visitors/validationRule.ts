import * as Yup from 'yup'
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