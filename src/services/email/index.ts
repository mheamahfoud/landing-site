import axios from "axios";
import { Http } from "../Http";

export const sendEmail = async (values) => {
    const res = await Http.post<any>(
      `sendemail`,
      {
        ...values
      }
    );
    return res?.data
  };
//https://www.google.com/recaptcha/api/siteverify?secret=${'6LdI300mAAAAAI_zn-S7QiS8oXOcB6pICZJGzoo2'}&response=${token}
  export const verifyToken = async (token) => {
    const res = await axios.post<any>(
      `https://www.google.com/recaptcha/api/siteverify?secret=${'6LdI300mAAAAAI_zn-S7QiS8oXOcB6pICZJGzoo2'}&response=${token}`,
    );
    return res
  };
  