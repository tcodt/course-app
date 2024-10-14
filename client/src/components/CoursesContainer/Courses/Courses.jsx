/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Course from "../Course/Course";
import Swal from "sweetalert2";
import { getCourses } from "../../../api/courseService";

export default function Courses() {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await getCourses("/courses");
        setCourseData(data);
      };
      fetchData();
    } catch (err) {
      Swal.fire({
        title: "متاسفانه مشکلی پیش آمد !",
        icon: "error",
        confirmButtonText: "باشه",
      });
      console.log(err);
    }
  }, []);

  return (
    <section className="mt-12">
      <div className="grid grid-cols-12 gap-8">
        <Course courseData={courseData} />
      </div>
    </section>
  );
}
