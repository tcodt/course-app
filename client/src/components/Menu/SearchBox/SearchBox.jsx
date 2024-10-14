/* eslint-disable react/prop-types */

import SearchBtn from "./SearchBtn";
import SearchInput from "./SearchInput";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SearchBox({ size, color }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [courses, setCourses] = useState([]);
  const [articles, setArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const coursesRes = await axios.get("http://localhost:3000/courses");
      const articlesRes = await axios.get("http://localhost:3000/articles");

      setCourses(coursesRes.data);
      setArticles(articlesRes.data);
    };

    fetchData();
  }, [query]);

  // Search box
  const searchHandler = (e) => {
    setIsOpen(true);
    const value = e.target.value;
    setQuery(value);

    const trimedValue = value.trim();

    if (trimedValue === "") {
      setResult([]);
      return;
    }

    const filteredCourses = courses.filter((course) =>
      course.title.toLowerCase().includes(trimedValue.toLowerCase())
    );
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(trimedValue.toLowerCase())
    );

    setResult([...filteredCourses, ...filteredArticles]);
  };

  const closeSearchBox = () => {
    setIsOpen(false);
    setQuery("");
  };

  // const openSearchBox = () => {
  //   setIsOpen(true);
  // };

  return (
    <div className="relative bg-slate-100 rounded-full shadow-sm py-2 px-4 flex items-center">
      <SearchInput onChange={searchHandler} query={query} />
      <SearchBtn size={size} color={color} />
      {/* Display Search box */}

      {isOpen && result.length > 0 && (
        <ul
          className="flex flex-col gap-4 max-h-80 w-[350px] absolute top-[70px] left-0 p-2 shadow-md bg-white border border-slate-200 rounded-xl overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-emerald-500 scrollbar-track-transparent"
          onClick={closeSearchBox}
        >
          {result &&
            result.length > 0 &&
            result.map((item) => (
              <Link
                to={
                  item.type === "course"
                    ? `/courses/${item.id}`
                    : item.type === "article"
                    ? `/articles/${item.id}`
                    : "/not-found"
                }
                key={item.id}
                className="flex items-center gap-4 p-2 rounded-xl bg-slate-100 shadow-sm"
              >
                <img
                  src={item.poster}
                  alt={item.title}
                  className="h-20 w-32 object-cover rounded-xl"
                />
                <h5 className="text-base text-gray-700 font-semibold">
                  {item.title}
                </h5>
              </Link>
            ))}
        </ul>
      )}
      {/* Display Search box */}
    </div>
  );
}
