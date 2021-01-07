import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./modules/login/Login";
import Register from "./modules/register/Register";
import Homepage from "./modules/homepage/Homepage";


class App extends Component {
  render() {
    return (
        <Fragment>

          <BrowserRouter>
            <Switch>
              <Route path={"/"} exact={true} component={Login} />
              <Route path={"/register"} exact={true} component={Register} />
              <Route path={"/home"} exact={true} component={Homepage} />
            </Switch>
          </BrowserRouter>

        </Fragment>
    )
  }
}

export default App;
