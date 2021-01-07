import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Login} from './pages/login';
import {Profile} from './pages/profile';
import {NavBar} from "./components/nav-bar";
import {AppContext} from "./context/app-context";
import './App.css';

function App() {
  const appContext = useContext(AppContext);
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
            {appContext.accessToken === null ? (

            )}
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
