import { Http } from "../Http";
export const getProjectCategory = async  (id) => {
  const res = await Http.post<any>(
    `list_project_category/${id}`,
    {
      lang: "en",
    }
  );
  return res?.data?.data;
};

export const getProjectDetails = async (id) => {
  const res = await Http.post<any>(
    `one_project_category/${id}`,
    {
      lang: "en",
    }
  );
  return res?.data?.data;
};
