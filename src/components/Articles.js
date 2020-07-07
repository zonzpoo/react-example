import React from "react";
import Article from "./Article/Article";

const Articles = ({ articles }) => {
    return (
        <div>
            {articles.map((article) => (
                <Article key={article.id} article={article} />
            ))}
        </div>
    );
};

export default Articles;
