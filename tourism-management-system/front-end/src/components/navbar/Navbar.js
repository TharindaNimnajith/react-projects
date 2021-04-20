import React, { Component } from 'react';
import Auth from '../../Authentication/Auth';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,
            isAdminLogged: false
        }

        if (Auth.isAuthenticated()) {
            this.setState({ isLogged: true });
        }


        if (Auth.isAdminLogged()) {
            this.setState({ isAdminLogged: true });
        }

        // if (Auth.getUserType() === "admin") {
        //     this.setState({ isAdminLogged: true });
        // }

    }

    render() {

        return (
            <div className="">
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="home"><img src={require('../../img/logo2.jpg')} className="d-inline-block align-top mr-2" width="80" height="70" alt="asd" />

                    </a>
                    <a className="navbar-brand" href="home" style={{ fontFamily: "Dancing Script", fontSize: "20px" }}>
                        Tourism Expert...
                    </a>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">



                        {

                            Auth.isAdminLogged() ?
                                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">


                                    <a className="nav-link"
                                        style={{
                                            padding: "4px",
                                            margin: "4px 10px",
                                            color: "white",
                                        }} href={Auth.isAuthenticated() ? "/addAdmin" : "/home"}>
                                        {Auth.isAuthenticated() ? "Manage Tourism Packages" : ""}
                                    </a>



                                    <a className="nav-link"
                                        style={{
                                            padding: "4px",
                                            margin: "4px 10px",
                                            color: "white",
                                        }} href={Auth.isAuthenticated() ? "/viewAdmin" : "/home"}>
                                        {Auth.isAuthenticated() ? "All Planned Packages" : ""}
                                    </a>


                                </div>

                                :


                                <a className="nav-link"
                                    style={{
                                        padding: "4px",
                                        margin: "4px 10px",
                                        color: "white",
                                    }} href={Auth.isAuthenticated() ? "/addUser" : "/home"}>
                                    {Auth.isAuthenticated() ? "Go with a New Plan" : ""}
                                </a>




                        }




                        <a className="nav-link" style={{ background: "gray", color: "White" }}
                            href={Auth.isAuthenticated() ? "/logout" : "/login"}>
                            {Auth.isAuthenticated() ? "Logout" : "Login/Register"}
                        </a>




                    </div>

                </nav>
                <br /><br />
            </div>
        );
    }
}

export default Navbar;