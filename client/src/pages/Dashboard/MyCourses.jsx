import UserDetails from "./UserDetails";
import {
  PiCreditCardDuotone,
  PiCurrencyCircleDollarDuotone,
  PiRocketDuotone,
} from "react-icons/pi";

// import CourseData from "../../CourseData.json";
// import { useEffect, useState } from "react";
// import { FaArrowLeftLong, FaStar, FaUsers } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { FaChalkboardTeacher, FaStarHalfAlt } from "react-icons/fa";
// import Loader from "../../components/Loader/Loader";

export default function MyCourses() {
  // const [data, setData] = useState([]);
  // const [isImgLoaded, setIsImgLoaded] = useState(false);

  // const imgLoadHandler = () => setIsImgLoaded(true);

  // // useEffect(() => {
  // //   setData(CourseData);
  // // }, []);

  // // Limit courses
  // let displayedCourses = data.slice(0, 3);

  return (
    <div>
      <div className="flex gap-4 items-center">
        <UserDetails
          title={0}
          preTitle="دوره های ثبت نام شده"
          color="yellow"
          icon={<PiCreditCardDuotone />}
          course={true}
        />
        <UserDetails
          title={0}
          preTitle="دوره های نقدی"
          color="blue"
          icon={<PiCurrencyCircleDollarDuotone />}
          course={true}
        />
        <UserDetails
          title={0}
          preTitle="دوره های رایگان"
          color="green"
          icon={<PiRocketDuotone />}
          course={true}
        />
      </div>
      <div>
        {/* {data.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {displayedCourses.map((course) => (
              <div
                key={course.id}
                className="rounded-md shadow-md bg-slate-200  relative hover-handler"
              >
                <img
                  src={course.image}
                  alt="Course Image"
                  className="h-56 w-full object-cover rounded-t-md"
                  onLoad={imgLoadHandler}
                />
                {!isImgLoaded && <Loader />}
                <div className="p-4">
                  <h3 className="font-semibold text-base text-gray-800">
                    {course.title}
                  </h3>
                  <div className="flex justify-between mt-4">
                    <span className="text-gray-700 text-base flex items-center">
                      <FaChalkboardTeacher className="text-xl text-sky-500" />
                      &nbsp;{course.teacher}
                    </span>
                    <span className="text-gray-700 text-base flex gap-1">
                      {course.rate === 5 ? (
                        <FaStar className="text-yellow-500" />
                      ) : (
                        <FaStarHalfAlt className="text-yellow-500" />
                      )}
                      {course.rate}
                    </span>
                  </div>
                  <div className="flex justify-between mt-4">
                    <span className="text-gray-700 text-base flex items-center">
                      <FaUsers className="text-xl text-sky-500" />
                      &nbsp;{course.student}
                    </span>
                    <span className="text-gray-800 text-base">
                      {course.price.toLocaleString("fa")} تومان
                    </span>
                  </div>
                  <Link to={`/course-info/${course.id}`}>
                    <button className="mt-4 w-full text-sky-500 border-t-2 border-slate-300 pt-4 hover:text-sky-600 transition flex items-center justify-center">
                      مشاهده اطلاعات&nbsp;
                      <FaArrowLeftLong className="text-xl" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="flex flex-col bg-slate-200 dark:bg-slate-600 p-4 rounded-lg gap-4">
              <div className="flex justify-between">
                <h5 className="text-lg text-gray-700 dark:text-zinc-100">
                  دوره ها
                </h5>
              </div>
              <hr className="border-white" />
              <div className="text-center">
                <p className="text-base text-gray-600 dark:text-zinc-400">
                  تا به الان در هیچ دوره ای ثبت نام نکرده‌اید.
                </p>
              </div>
            </div>
          </>
        )} */}

        <div className="flex flex-col bg-slate-200 dark:bg-slate-600 p-4 rounded-lg gap-4">
          <div className="flex justify-between">
            <h5 className="text-lg text-gray-700 dark:text-zinc-100">
              دوره ها
            </h5>
          </div>
          <hr className="border-white" />
          <div className="text-center">
            <p className="text-base text-gray-600 dark:text-zinc-400">
              تا به الان در هیچ دوره ای ثبت نام نکرده‌اید.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
