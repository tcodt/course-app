/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { BiLogIn } from "react-icons/bi";
import { PiUser } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AccountBtn({ size, color }) {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log(user.isRegistered);
  }, [user]);

  return (
    <>
      {user.isRegistered ? (
        <Link
          to="/dashboard/my-account"
          className="p-3 inline-block bg-slate-100 rounded-full shadow-sm tooltip tooltip-right"
          data-tip="پنل کاربری"
        >
          <PiUser size={size} color={color} />
        </Link>
      ) : (
        <Link
          to="/register"
          className="p-3 inline-block bg-slate-100 rounded-full shadow-sm tooltip tooltip-right"
          data-tip="ثبت نام / وارد شوید"
        >
          <BiLogIn size={size} color={color} />
        </Link>
      )}
    </>
  );
}
