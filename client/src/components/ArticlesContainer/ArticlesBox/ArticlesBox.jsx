/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Articles from "../Articles/Articles";
import { getArticles } from "../../../api/articleService";

export default function ArticlesBox({ count, colSpan = "col-span-3" }) {
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await getArticles();
        setArticlesData(data);
      };

      fetchData();
    } catch (err) {
      throw new Error("متاسفانه مشکلی پیش آمد!", err);
    }
  }, []);

  return (
    <section className="mt-12">
      <div className="grid grid-cols-12 gap-4">
        <Articles articles={articlesData} count={count} colSpan={colSpan} />
      </div>
    </section>
  );
}
