/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRout({ children }) {
  const isRegistered = useSelector((state) => state.user.isRegistered);

  return isRegistered ? children : <Navigate to="/register" />;
}
