/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { PiChalkboardTeacherThin, PiUsersThreeThin } from "react-icons/pi";

export default function CourseDetails({
  title,
  description,
  teacher,
  rates,
  students,
  price,
}) {
  return (
    <div className="p-4">
      <a href="#" className="text-base text-gray-900 font-semibold">
        {title}
      </a>
      <p className="text-sm text-gray-500 font-normal mt-4">{description}</p>
      <div className="flex items-center justify-between my-4">
        <a
          href="#"
          className="text-sm text-gray-500 font-normal flex items-center gap-1 cursor-pointer hover:text-emerald-500 transition"
        >
          <PiChalkboardTeacherThin size={20} /> {teacher}
        </a>
        <span className="text-sm text-amber-500 font-normal flex items-center gap-1 farsi-num">
          {rates} <FaStar size={15} />
        </span>
      </div>
      <hr />
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-500 font-normal flex items-center gap-1 farsi-num">
          <PiUsersThreeThin size={20} /> {students}
        </span>
        <span className="text-base text-emerald-500 font-normal farsi-num">
          {price.toLocaleString()} تومان
        </span>
      </div>
    </div>
  );
}
