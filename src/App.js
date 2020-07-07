import React, { useState } from "react";
import AddArticle from "./components/AddArticle/AddArticle";

import Articles from "./components/Articles";

const App = () => {
    const [articles, setArticles] = useState([
        {
            id: 1,
            title: "post 1",
            body: "Quisque cursus, metus vitae pharetra",
        },
        {
            id: 2,
            title: "post 2",
            body: "Quisque cursus, metus vitae pharetra",
        },
    ]);

    const saveArticle = (article) => {
        article["id"] = articles.length + 1;
        const newArticles = articles.concat(article);
        setArticles(newArticles);
    };

    return (
        <div>
            <AddArticle saveArticle={saveArticle} />
            <Articles articles={articles} />
        </div>
    );
};

export default App;
