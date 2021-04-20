import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import ArticlesList from "./components/articles-list.component";
import EditArticle from "./components/edit-article.component";
import CreateArticle from "./components/create-article.component";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ArticlesList} />
        <Route path="/edit/:id" component={EditArticle} />
        <Route path="/create" component={CreateArticle} />

      </div>
    </Router>
  );
}

export default App;
