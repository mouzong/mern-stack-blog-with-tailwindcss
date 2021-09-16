import React from "react";
import { Link } from "react-router-dom";
import articles from "./article-content";

const ArticleList = () => {
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mb-6 mt-6 text-gray-900">
        Articles
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          {articles.map((article, index) => (
            <div key={index} className="p-4 md:w=full">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Link to={`/article/${article.name}`}>
                  <img
                    src={article.thumbnail}
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    alt="blog"
                  />
                </Link>
                <div className="p-6">
                  <Link key={index} to={`/article/${article.name}`}>
                    <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {article.title}
                    </h3>
                  </Link>
                  <p>{article.content[0].substring(0, 120)}...</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticleList;
