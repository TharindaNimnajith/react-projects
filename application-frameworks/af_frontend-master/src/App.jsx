import React, { Component } from 'react';

import CovidNews from './components/covidNews/CovidNews.jsx';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/navigator/NavBar.jsx';
import EmployeeDetails from './components/employee/EmployeeDetails.jsx';

class App extends Component {



  render() {
    return (
      <div>

        <NavBar />

        <BrowserRouter>
          <Switch>
            <Route path="/covid" component={CovidNews} exact/>
            <Route path="/emp" component={EmployeeDetails} exact/>
          </Switch>
        </BrowserRouter>
        

      

      </div>
    );
  }
}

export default App;