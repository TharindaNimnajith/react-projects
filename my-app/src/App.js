import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Login} from './pages/login';
import {Profile} from './pages/profile';
import {NavBar} from './components/nav-bar';
import './App.css';

function App() {
  return (
    <div>
      <NavBar/>
      <div className='container'>
        <BrowserRouter>
          <Switch>
            <Route path='/login'>
              <Login/>
            </Route>
            <Route path='/logout'>
              <Login/>
            </Route>
            <Route path='/profile'>
              <Profile/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
