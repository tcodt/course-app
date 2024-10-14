// import { useNavigate } from "react-router-dom";
import "./App.css";
import router from "./router";
import { setUser } from "./features/user/userSlice";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUsers } from "./api/userService";

// import { Link } from "react-router-dom";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const userToken = localStorage.getItem("authToken");

      if (userToken) {
        const data = await getUsers();
        console.log(data);
        const registeredUser = data.find((user) => user.token === userToken);
        console.log(registeredUser);
        dispatch(setUser(registeredUser));
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
