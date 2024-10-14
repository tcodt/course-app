import ArticlesDetails from "../ArticlesDetails/ArticlesDetails";
import ArticlesImage from "../ArticlesImage/ArticlesImage";

/* eslint-disable react/prop-types */
export default function Articles({ articles, count }) {
  return (
    <>
      {articles.slice(0, count).map((article) => (
        <div
          key={article.id}
          className={`col-span-12 md:col-span-3 bg-white rounded-xl shadow-sm`}
        >
          <ArticlesImage
            poster={article.poster}
            title={article.title}
            id={article.id}
          />
          <ArticlesDetails
            title={article.title}
            author={article.author}
            content={article.content}
            publishedDate={article.publishedDate}
          />
        </div>
      ))}
    </>
  );
}
