import * as Yup from 'yup'
import { intlNonCom } from '../../i18n/i18nProvider'


export const roleSchema = Yup.object().shape({
    name: Yup.string()
      .required(intlNonCom.formatMessage({id:'object_required'} , {name : intlNonCom.formatMessage({id:'field'})} )),
  email: Yup.string().email(intlNonCom.formatMessage({id:'invalid_email'}  )).required(intlNonCom.formatMessage({id:'object_required'} , {name : intlNonCom.formatMessage({id:'field'})} )),
    custom: Yup.string()
      .required(intlNonCom.formatMessage({id:'object_required'} , {name : intlNonCom.formatMessage({id:'field'})} )),
    msg: Yup.string()
      .required(intlNonCom.formatMessage({id:'object_required'} , {name : intlNonCom.formatMessage({id:'field'})} )),
    phone: Yup.string()
      .required(intlNonCom.formatMessage({id:'object_required'} , {name : intlNonCom.formatMessage({id:'field'})} )),
    company: Yup.string()
      .required(intlNonCom.formatMessage({id:'object_required'} , {name : intlNonCom.formatMessage({id:'field'})} )),
   
  
  })