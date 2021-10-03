import React, { useState, useEffect } from "react";
import Articles from "../components/Articles";
import articleContent from "./article-content";
import NotFound from "./404page";
import CommentList from "../components/CommentList";
import AddCommentForm from "../components/AddComments";

const Article = ({ match }) => {
  const [articleInfo, setArticleInfo] = useState({ comments: [] });
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) return <NotFound />;

  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mb-6 mt-6 text-gray-900">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p
          className="mx-auto leading-relaxed text-base mb-4 text-justify"
          key={index}
        >
          {paragraph}
        </p>
      ))}

      <CommentList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <h1 className="sm:text-2x text-xl font-bold mt-4 mb-4 text-gray-900">
        Other articles
      </h1>
      <div className="flex flex-wrap -m-4">
        <Articles articles={otherArticles} />
      </div>
    </>
  );
};

export default Article;
