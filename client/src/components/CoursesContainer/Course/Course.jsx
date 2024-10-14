/* eslint-disable react/prop-types */
import CourseImage from "../CourseImage/CourseImage";
import CourseDetails from "../CourseDetails/CourseDetails";

export default function Course({ courseData }) {
  return (
    <>
      {courseData.length > 0 ? (
        courseData.map((course) => (
          <div
            key={course.id}
            className={`col-span-12 md:col-span-3 bg-white shadow-sm rounded-xl`}
          >
            <CourseImage
              image={course.poster}
              title={course.title}
              id={course.id}
            />
            <CourseDetails
              title={course.title}
              description={course.description}
              teacher={course.teacher}
              rates={course.rates}
              students={course.students}
              price={course.price}
            />
          </div>
        ))
      ) : (
        <div>No Data !</div>
      )}
    </>
  );
}
