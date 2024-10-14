import axiosInstance from "../axios.Config";

export const getCourses = async () => {
  const response = await axiosInstance.get("/courses");
  return response.data;
};
export const getCourseById = async (id) => {
  const response = await axiosInstance.get(`/courses/${id}`);
  return response.date;
};
