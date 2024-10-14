/* eslint-disable no-unused-vars */
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  PiChatsDuotone,
  PiDoorOpenDuotone,
  PiFolderOpenDuotone,
  PiHouseDuotone,
  PiUserDuotone,
} from "react-icons/pi";
import DashboardNavBar from "./DashboardNavBar";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { resetUser, setUser } from "../../features/user/userSlice";

import "./Dashboard.css";
import { getUsers } from "../../api/userService";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const modalContentRef = useRef(null);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const userToken = localStorage.getItem("authToken");

      if (userToken) {
        const data = await getUsers();
        const registeredUser = data.find((user) => user.token === userToken);
        dispatch(setUser(registeredUser));
      }
    };

    fetchData();
  }, [dispatch]);

  const openModal = () => {
    setShowModal(true);
  };

  const logoutHandler = () => {
    dispatch(resetUser());
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const closeModal = (e) => {
    if (!modalContentRef.current?.contains(e.target)) {
      setShowModal(false);
    }
  };

  return (
    <>
      <section className="flex gap-8 bg-slate-200 dark:bg-gray-600 p-8 h-screen">
        <aside className="w-1/4 bg-white dark:bg-gray-800 rounded-lg p-4">
          <div className="flex flex-col justify-center items-center gap-6">
            <NavLink to="/">
              <img
                src="/images/tcod-logo-white.jpg"
                className="h-40 object-contain rounded-2xl"
                alt="Logo"
              />
            </NavLink>
            <ul className="flex flex-col gap-4 w-full">
              <li className="w-full">
                <NavLink
                  to="my-account"
                  className="flex gap-2 items-center bg-slate-100 dark:bg-slate-600 dark:text-zinc-100 text-gray-700 text-lg p-2 rounded-lg transition"
                >
                  <PiHouseDuotone className="text-2xl" /> پیشخوان
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="courses"
                  className="flex gap-2 items-center bg-slate-100 dark:bg-slate-600 dark:text-zinc-100 text-gray-700 text-lg p-2 rounded-lg transition"
                >
                  <PiFolderOpenDuotone className="text-2xl" /> دوره های من
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="tickets"
                  className="flex gap-2 items-center bg-slate-100 dark:bg-slate-600 dark:text-zinc-100 text-gray-700 text-lg p-2 rounded-lg transition"
                >
                  <PiChatsDuotone className="text-2xl" /> تیکت ها
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="edit-account"
                  className="flex gap-2 items-center bg-slate-100 dark:bg-slate-600 dark:text-zinc-100 text-gray-700 text-lg p-2 rounded-lg transition"
                >
                  <PiUserDuotone className="text-2xl" /> جزئیات حساب
                </NavLink>
              </li>
              <li>
                <button
                  className="flex gap-2 items-center bg-slate-100 dark:bg-slate-600 dark:text-zinc-100 text-gray-700 text-lg focus-within:bg-red-500 focus-within:text-white p-2 rounded-lg w-full transition"
                  onClick={openModal}
                >
                  <PiDoorOpenDuotone className="text-2xl" /> خروج
                </button>

                {showModal && (
                  <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10 animate-fade-in"
                    onClick={closeModal}
                  >
                    <div
                      className="bg-white dark:bg-slate-600 p-6 rounded-lg shadow-lg min-w-[300px] modal-content animate-slide-in"
                      ref={modalContentRef}
                    >
                      <h2 className="text-lg dark:text-white font-bold mb-4">
                        آیا میخواهید از حساب خود خارج شوید؟
                      </h2>
                      <div className="bg-white dark:bg-slate-600 rounded-lg p-4 flex items-center gap-4">
                        <button
                          className="bg-green-500 hover:bg-green-600 text-white rounded-lg p-2 flex-1 transition"
                          onClick={logoutHandler}
                        >
                          بله
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-2 flex-1 transition"
                          onClick={() => setShowModal(false)}
                        >
                          خیر
                        </button>
                      </div>
                      {/* Add any additional content or functionality inside the modal */}
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </aside>
        <div className="bg-white dark:bg-gray-800 rounded-lg w-full custom-scrollbar">
          <div className="flex flex-col gap-6 p-6">
            <DashboardNavBar />

            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}
