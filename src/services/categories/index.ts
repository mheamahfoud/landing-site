import axios from "axios";

export const getProjectCategory = async (id) => {
  const res = await axios.post(
    `https://nistudio.net/nis_website/api/list_project_category/${id}`,
    {
      lang: "en",
    }
  );
  return res?.data?.data;
};

export const getProjectDetails = async (id) => {
  const res = await axios.post(
    `https://nistudio.net/nis_website/api/one_project_category/${id}`,
    {
      lang: "en",
    }
  );
  return res?.data;
};
