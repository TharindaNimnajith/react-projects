/* jshint esversion: 6 */

import React, { Component } from 'react';  // most react components will have these React and Component from react imports
import { Link } from 'react-router-dom';  // import Link from react router dom to link to different routes

// all components starts with this export of that particular component which extends Component class
export default class Navbar extends Component {
    render() {
        // rendering the return statement
        return (
            // code for navigation bar from the bootstrap documentation
            // altered accordingly to react and the specific dependencies and libraries used for this project
            // class -> className
            // <a> tag -> <Link>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">
                    Exercise Tracker
                </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">
                                Exercises
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create_exercise" className="nav-link">
                                Create Exercise Log
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/users" className="nav-link">
                                Users
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create_user" className="nav-link">
                                Create User
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
