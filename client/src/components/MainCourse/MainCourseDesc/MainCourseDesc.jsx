/* eslint-disable react/prop-types */
import { PiStudent } from "react-icons/pi";
import MainCoursePoster from "../MainCoursePoster/MainCoursePoster";
import BlurEffect from "../../BlurEffect/BlurEffect";

export default function MainCourseDesc({
  title,
  description,
  isRegistered,
  price,
  poster,
}) {
  return (
    <div className="flex items-center gap-6 mb-8 relative z-50">
      <BlurEffect sideX="right-0" sideY="top-0" bgColor="bg-blue-500" />
      <div className="flex-1">
        <div className="flex flex-col gap-6">
          <h3 className="text-gray-800 text-2xl font-bold">{title}</h3>
          <p className="text-base text-gray-600 font-thin">
            {description} لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
            چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
            مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
            نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
          <div className="flex items-center justify-between">
            {!isRegistered ? (
              <button className="bg-emerald-500 p-4 rounded-full text-white flex items-center gap-2 hover:bg-emerald-600 transition">
                <PiStudent size={25} /> ثبت نام در دوره
              </button>
            ) : (
              <p>شما دانشجوی دوره هستید</p>
            )}

            <span className="text-lg text-gray-800 font-semibold farsi-num">
              {price?.toLocaleString()} تومان
            </span>
          </div>
        </div>
      </div>
      <MainCoursePoster poster={poster} title={title} />
    </div>
  );
}
