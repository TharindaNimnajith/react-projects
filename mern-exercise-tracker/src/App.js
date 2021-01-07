/* jshint esversion: 6 */

import React from 'react';  // import react
import { BrowserRouter as Router, Route } from "react-router-dom";  // import react router for easy routing
import "bootstrap/dist/css/bootstrap.min.css";  // import bootstrap for styling
//import logo from './logo.svg';
//import './App.css';

// logrocket
//import LogRocket from 'logrocket';
//LogRocket.init('fggygy/mern');
//setupLogRocketReact(LogRocket);

// import components
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import UsersList from "./components/users-list.component";
import EditUser from "./components/edit-user.component";
import CreateUser from "./components/create-user.component";

function App() {
	return (
        // Router element is used to route different URLs to different React components
        <Router>
            <div className="container">
                <Navbar />
                <br />

                <Route path="/" exact component={ExercisesList} />
                <Route path="/edit_exercise/:id" exact component={EditExercise} />
                <Route path="/create_exercise" exact component={CreateExercise} />
                <Route path="/users" exact component={UsersList} />
                <Route path="/edit_user/:id" exact component={EditUser} />
                <Route path="/create_user" exact component={CreateUser} />
            </div>
        </Router>
    );
}

export default App;
