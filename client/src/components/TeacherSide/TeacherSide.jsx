import { FaChalkboardTeacher } from "react-icons/fa";

/* eslint-disable react/prop-types */
export default function TeacherSide({ teacher }) {
  return (
    <div className="col-span-4">
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex flex-col items-center gap-4">
          <FaChalkboardTeacher size={50} className="text-emerald-500" />
          <h3 className="text-lg text-gray-800 font-semibold">
            {teacher} | مدرس دوره
          </h3>
          <p className="text-sm text-gray-600 font-normal">
            لورم ایپسوم متن ساختگی
          </p>
          <button className="py-3 px-4 border text-emerald-500 border-emerald-500 hover:bg-emerald-500 rounded-full hover:text-white transition">
            مشاهده پروفایل
          </button>
        </div>
      </div>
    </div>
  );
}
