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
  