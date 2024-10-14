/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function ArticlesImage({ poster, title, id }) {
  return (
    <Link to={`/articles/${id}`}>
      <img
        src={poster}
        alt={title}
        className="rounded-xl h-[180px] w-full object-cover"
      />
    </Link>
  );
}
