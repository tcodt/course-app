/* eslint-disable react/prop-types */
import { BiHome } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function BreadCrumb({ title, category, categoryFor }) {
  return (
    <div className="my-8">
      <ul className="bg-white p-3 shadow-sm rounded-xl flex items-center gap-4">
        <li className="flex items-center gap-4">
          <Link to="/" className="text-base text-gray-700">
            <BiHome size={25} color="gray" />
          </Link>
          <IoIosArrowBack size={20} color="gray" />
        </li>
        <li className="flex items-center gap-4">
          <Link to="/courses" className="text-base text-gray-700">
            {categoryFor}
          </Link>
          <IoIosArrowBack size={20} color="gray" />
        </li>
        <li className="flex items-center gap-4">
          <Link className="text-base text-gray-700">{category}</Link>
          <IoIosArrowBack size={20} color="gray" />
        </li>
        <li className="flex items-center gap-4">
          <Link className="text-base text-gray-700">{title}</Link>
          {/* <IoIosArrowBack size={20} color="gray" /> */}
        </li>
      </ul>
    </div>
  );
}
