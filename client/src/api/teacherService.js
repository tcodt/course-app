import axiosInstance from "../axios.Config";

export const getTeachers = async () => {
  const response = await axiosInstance.get("/teachers");
  return response.data;
};
