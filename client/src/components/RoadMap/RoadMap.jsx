import { useEffect, useState } from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiCodementor } from "react-icons/si";
import { TbDeviceImacCode } from "react-icons/tb";
import { getCourses } from "../../api/courseService";

export default function RoadMap() {
  const [roadmapData, setRoadmapData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCourses();
      setRoadmapData(data);
    };
    fetchData();
  }, []);

  const frontendCourses = roadmapData.filter(
    (course) => course.roadmapCategory === "frontend"
  );

  const backendCourses = roadmapData.filter(
    (course) => course.roadmapCategory === "backend"
  );

  const webDesignCourses = roadmapData.filter(
    (course) => course.roadmapCategory === "design"
  );

  return (
    <section className="mt-12">
      <div className="flex items-center justify-evenly gap-4 flex-wrap md:flex-row">
        <a
          href="#"
          className="flex-auto flex justify-center items-center p-4 bg-white shadow-sm rounded-xl cursor-pointer"
        >
          <div className="flex flex-col items-center gap-4 p-2">
            <SiCodementor size={60} color="green" />
            <span className="text-lg text-gray-700">فرانت اند</span>
            <p className="farsi-num text-base text-gray-600">
              {frontendCourses.length} دوره
            </p>
          </div>
        </a>
        <a
          href="#"
          className="flex-auto flex justify-center items-center relative p-4 bg-white rounded-xl shadow-sm cursor-pointer"
        >
          <div className="flex flex-col items-center gap-4 p-2 custom-text">
            <TbDeviceImacCode size={60} color="red" />
            <span className="text-lg text-gray-700">بک اند</span>
            <p className="farsi-num text-base text-gray-600">
              {backendCourses.length} دوره
            </p>
          </div>
        </a>
        <a
          href="#"
          className="flex-auto flex justify-center items-center relative p-4 bg-white rounded-xl shadow-sm cursor-pointer"
        >
          <div className="flex flex-col items-center gap-4 p-2 custom-text">
            <MdOutlineDesignServices size={60} color="purple" />
            <span className="text-lg text-gray-700">طراحی وب</span>
            <p className="farsi-num text-base text-gray-600">
              {webDesignCourses.length} دوره
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
