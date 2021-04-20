import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">ArticlePublisher</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">All Articles</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Article</Link>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}