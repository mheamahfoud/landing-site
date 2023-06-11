import { getConfig } from "../../i18n/Metronici18n";
import { Http } from "../Http";
export const getProjectCategory = async  (id) => {
  const res = await Http.post<any>(
    `list_project_category/${id}`,
    {
      lang: getConfig().selectedLang,
    }
  );
  return res?.data?.data;
};

export const getProjectDetails = async (id) => {
  const res = await Http.post<any>(
    `one_project_category/${id}`,
    {
      lang: getConfig().selectedLang,
    }
  );
  return res?.data?.data;
};
