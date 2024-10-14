/* eslint-disable react/prop-types */

import { CiCalendar } from "react-icons/ci";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { PiChalkboardTeacherThin } from "react-icons/pi";

export default function ArticlesDetails({
  title,
  content,
  author,
  publishedDate,
}) {
  return (
    <div className="p-4">
      <a href="#" className="text-base text-gray-900 font-semibold">
        {title}
      </a>
      <p className="text-sm text-gray-500 font-normal mt-4 line-clamp-4">
        {content}
      </p>
      <div className="flex items-center justify-between my-4">
        <a
          href="#"
          className="text-sm text-gray-500 font-normal flex items-center gap-1 cursor-pointer hover:text-emerald-500 transition"
        >
          <PiChalkboardTeacherThin size={20} /> {author}
        </a>
        <span className="text-sm text-gray-500 font-normal flex items-center gap-1 farsi-num">
          {publishedDate} <CiCalendar size={20} />
        </span>
      </div>
      <hr />
      <div className="flex items-center justify-center">
        <button className="flex items-center gap-4 text-gray-700 font-semibold mt-4 hover:text-emerald-500 transition">
          مطالعه مقاله <FaCircleArrowLeft size={20} />
        </button>
      </div>
    </div>
  );
}
