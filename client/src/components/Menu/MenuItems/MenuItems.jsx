import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function MenuItems({ item }) {
  return (
    <li>
      <Link to="/articles" className="text-base text-gray-800">
        {item}
      </Link>
    </li>
  );
}
