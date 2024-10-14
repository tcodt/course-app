import { useEffect, useState } from "react";
import GroupTitlesBox from "../../components/GroupTitles/GroupTitlesBox/GroupTitlesBox";
import Header from "../../layout/Header/Header";
import Swal from "sweetalert2";
import Course from "../../components/CoursesContainer/Course/Course";
import { RiArrowDownWideFill } from "react-icons/ri";
import Footer from "../../layout/Footer/Footer";
import { LuArrowUpDown } from "react-icons/lu";
import CoursesPageSidebar from "../../components/CoursesPageSidebar/CoursesPageSidebar";
import { BiCategoryAlt } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { getCourses } from "../../api/courseService";

export default function Courses() {
  const [allCourses, setAllCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [displayedCourses, setDisplayedCourses] = useState(3);
  const [selectedBtn, setSelectedBtn] = useState("all");
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const coursesToDisplay = 3;

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const data = await getCourses();

        console.log("data: ", data);
        setAllCourses(data);
        setCourses(data); // Initially set all courses
      } catch (error) {
        Swal.fire({
          title: "متاسفانه مشکلی پیش آمد !",
          icon: "error",
          confirmButtonText: "باشه",
        });
        console.log(error);
      }
    };

    fetchDate();
    window.scrollTo(0, 0);
    document.title = "TCOD | دوره ها";
  }, []);

  const handleMoreCourses = () => {
    setDisplayedCourses((prevCourses) => prevCourses + coursesToDisplay);
  };

  const filterCheapCourses = () => {
    return allCourses.filter((course) => course.price <= 120000);
  };

  const filterExpensiveCourses = () => {
    return allCourses.filter((course) => course.price > 120000);
  };

  //! Should be programing...
  const filterFrontEndCourses = () => {
    return allCourses.filter((course) => course.category === "فرانت اند");
  };

  //! Should be programing...
  const filterBackEndCourses = () => {
    return allCourses.filter((course) => course.category === "بک اند");
  };

  //! Should be programing...
  const filterWebDesignCourses = () => {
    return allCourses.filter((course) => course.category === "طراحی وب");
  };

  const handleSelectedBtn = (btn) => {
    setSelectedBtn(btn);
    setDisplayedCourses(3); // Reset displayed courses count

    if (btn === "cheap") {
      setCourses(filterCheapCourses());
    } else if (btn === "expensive") {
      setCourses(filterExpensiveCourses());
    } else {
      setCourses(allCourses); // Show all courses
    }
  };

  // Get courses category and deleting iterated items using Set method
  const coursesCategory = [
    ...new Set(courses.map((course) => course.category)),
  ];

  //! Error
  const handleCheckedLabels = () => {
    console.log(category);
    setIsChecked(!isChecked);
  };

  const handleCategoryBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header />
      <section className="bg-slate-100 py-8 relative z-10">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <GroupTitlesBox text="همه دوره ها" />
            <span className="text-lg text-gray-600 farsi-num">
              {allCourses.length} عنوان آموزشی
            </span>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-3">
                <CoursesPageSidebar
                  filterFrontEndCourses={filterFrontEndCourses}
                  filterBackEndCourses={filterBackEndCourses}
                  filterWebDesignCourses={filterWebDesignCourses}
                />

                <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col">
                  <div
                    className={`flex items-center justify-between ${
                      isOpen ? "mb-4" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <BiCategoryAlt size={25} color="gray" />
                      <p className="text-gray-700">دسته بندی دوره ها</p>
                    </div>
                    <button onClick={handleCategoryBox}>
                      {isOpen ? (
                        <IoIosArrowUp size={25} color="gray" />
                      ) : (
                        <IoIosArrowDown size={25} color="gray" />
                      )}
                    </button>
                  </div>
                  {isOpen ? (
                    <>
                      <hr />
                      <ul className="mt-4 flex flex-col gap-4">
                        {coursesCategory.map((category, index) => (
                          <li key={index} className="p-1">
                            <label className="relative flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                className="sr-only"
                                checked={isChecked}
                                onChange={() => handleCheckedLabels(category)}
                              />
                              <div className="bg-slate-200 w-4 h-4 rounded shadow-inner"></div>
                              <div
                                className={`absolute w-4 h-4 rounded shadow transition-opacity duration-300 ${
                                  isChecked
                                    ? "opacity-100 bg-emerald-500"
                                    : "opacity-0"
                                }`}
                              ></div>
                              <p className="text-gray-700">{category}</p>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                </div>
              </div>
              <div className="col-span-9">
                <div className="flex flex-col gap-6">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <ul className="flex items-center gap-8">
                      <li className="flex items-center gap-2 text-gray-700">
                        <LuArrowUpDown size={25} color="gray" /> مرتب سازی بر
                        اساس :
                      </li>
                      <li>
                        <button
                          className={`text-gray-700 ${
                            selectedBtn === "all"
                              ? "border-b-2 border-emerald-500"
                              : ""
                          }`}
                          onClick={() => handleSelectedBtn("all")}
                        >
                          همه دوره ها
                        </button>
                      </li>
                      <li>
                        <button
                          className={`text-gray-700 ${
                            selectedBtn === "cheap"
                              ? "border-b-2 border-emerald-500"
                              : ""
                          }`}
                          onClick={() => handleSelectedBtn("cheap")}
                        >
                          ارزانترین
                        </button>
                      </li>
                      <li>
                        <button
                          className={`text-gray-700 ${
                            selectedBtn === "expensive"
                              ? "border-b-2 border-emerald-500"
                              : ""
                          }`}
                          onClick={() => handleSelectedBtn("expensive")}
                        >
                          گرانترین
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="grid grid-cols-12 gap-8">
                    <Course
                      courseData={courses.slice(0, displayedCourses)}
                      colSpan="col-span-4"
                    />
                    <div className="col-span-12 my-6 flex items-center justify-center">
                      {displayedCourses < courses.length && (
                        <button
                          className="p-4 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition flex items-center gap-2"
                          onClick={handleMoreCourses}
                        >
                          مشاهده بیشتر <RiArrowDownWideFill size={20} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
