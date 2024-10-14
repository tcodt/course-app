import axiosInstance from "../axios.Config";

export const getArticles = async () => {
  const response = await axiosInstance.get("/articles");
  return response.data;
};
export const getArticleById = async (id) => {
  const response = await axiosInstance.get(`/articles/${id}`);
  return response.data;
};
