import React from "react";
import { Link } from "react-router-dom";
import Articles from "../components/Articles";
import articles from "./article-content";

const ArticleList = () => {
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mb-6 mt-6 text-gray-900">
        Articles
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Articles articles={articles} />
        </div>
      </div>
    </>
  );
};

export default ArticleList;
