import React, {useContext} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import MainNavbar from "./components/navbar/navbar-component";
import LoginSignup from "./pages/login-signup/login-signup-component";
import Homepage from "./pages/homepage/homepage-component";
import Checkout from "./pages/checkout/checkout-component";
import UpdatePassword from "./pages/forgot-password/forgot-password-component";
import {AppContext} from "./Context/app-context";

function App() {
  let routess;
  const app = useContext(AppContext);
  console.log(app.loggedin + " roues check");

  if (app.loggedin) {
    routess = (
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/checkout-page" component={Checkout}/>
        <Redirect to="/"/>
      </Switch>
    );
  } else {
    routess = (
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/signin-signup" component={LoginSignup}/>
        <Route exact path="/forgot-password" component={UpdatePassword}/>
        <Redirect to="/signin-signup"/>
      </Switch>
    );
  }

  return (
    <div className="App">
      <MainNavbar/>
      {routess}
    </div>
  );
}

export default App;
