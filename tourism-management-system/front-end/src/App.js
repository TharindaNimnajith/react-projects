import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import Login from './components/login/Login';
import Register from './components/login/Register';
import Home from './components/Home/Home';
import AddAdmin from './components/add/AddAdmin';
import AddUser from './components/add/AddUser';
import ViewAdmin from './components/add/ViewAdmin';
import Auth from "./Authentication/Auth";

function App() {
  return (
    <div >


      <BrowserRouter>
        <Switch>

          <Route path="/login" exact>
            <Navbar />
            <Login />
          </Route>
          <Route path="/register" exact>
            <Navbar />
            <Register />
          </Route>
          <Route path="/home" exact>
            <Navbar />
            <Home />
          </Route>
          <Route
            path="/logout"
            render={() => {
              Auth.logout();
              return (
                <div>
                  <Navbar />
                  <Home />
                </div>
              );
            }}
          />
          <Route path="/addAdmin" component={AddAdmin} exact >
            <Navbar />
            <AddAdmin />
          </Route>
          <Route path="/addUser" component={AddUser} exact >
            <Navbar />
            <AddUser />
          </Route>
          <Route path="/viewAdmin" component={ViewAdmin} exact >
            <Navbar />
            <ViewAdmin />
          </Route>
          <Route path="*">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
