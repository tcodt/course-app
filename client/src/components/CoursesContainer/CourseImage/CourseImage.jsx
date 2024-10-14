/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function CourseImage({ image, title, id }) {
  return (
    <Link to={`/courses/${id}`}>
      <img
        src={image}
        alt={title}
        className="rounded-xl h-[180px] w-full object-cover"
      />
    </Link>
  );
}
