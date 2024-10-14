import axiosInstance from "../axios.Config";

export const getUsers = async () => {
  const response = await axiosInstance.get("/users");
  return response.data;
};

export const createUser = async (userData) => {
  const response = await axiosInstance.post("/users", userData);
  return response;
};
