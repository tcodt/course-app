import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function AllCoursesBtn({ children }) {
  return (
    <Link
      to="/courses"
      className={`flex items-center gap-2 rounded-full p-4 text-emerald-500 relative text-base font-normal before:content-[''] before:absolute before:bottom-0 before:right-0 before:bg-emerald-500 before:w-full before:h-full before:translate-y-full hover:before:translate-y-0 before:transition-all before:-z-10 hover:text-white transition-all overflow-hidden z-20`}
    >
      {children}
    </Link>
  );
}
