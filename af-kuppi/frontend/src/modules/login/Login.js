import React, { Component } from "react";
import { Card, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";
import get from "lodash.get";
import axios from "axios";

import "./login.css";
import TextField from "../../components/text-field/TextField";
import ButtonComponent from "../../components/button/Button";
import { isEmpty, setLocalStorageItem } from "../../helpers/common.helpers";
import Loader from "../../components/loader/Loader";
import { authAPI, authStoreKey } from "../../configs/config";


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {},
            inputErrors: {},
            loader: false
        }
    }

    onChangeFn = (event) => {
        this.setState({
            ...this.state,
            formData: {
                ...this.state.formData,
                [event.name]: event.value
            }
        })
    }

    onClickFn = () => {
        let { history } = this.props;

        if (this.validateFn(this.state.formData)) {

            this.setState({
                ...this.state,
                loader: true,
                inputErrors: {}
            }, () => {

                axios.post(authAPI, this.state.formData)
                    .then((result) => {

                        setLocalStorageItem(authStoreKey ,result.data.data);
                        history.push("/home");
                    })
                    .catch((err) => {

                        this.setState({
                            ...this.state,
                            loader: false,
                            inputErrors: {
                                email: "Email or Password is incorrect",
                                password: "Email or Password is incorrect",
                            }
                        })
                    })
            })
        }
    }

    validateFn = (formObj) => {
        let errors = {};

        if (isEmpty(formObj.email)) {
            errors["email"] = "Email is required";
        }

        if (isEmpty(formObj.password)) {
            errors["password"] = "Password is required";
        }

        if (Object.keys(errors).length > 0) {
            this.setState({
                ...this.state,
                inputErrors: errors
            });

            return false
        } else {
            return true;
        }
    }

    render() {
        return (
            <div className={"container-fluid"}>
                {
                    (this.state.loader === true) ? (
                        <Loader />
                    ) :  null
                }
                <div className={"loginWrapper"}>

                    <Card className={"overflow-hidden"}>
                        <div className={"loginHeader"}>
                            <div className={"text-primary text-center p-4"}>

                                <h5 className={"text-white font-size-20"}>
                                    Welcome Back !
                                </h5>

                                <p className={"text-white-50"}>
                                    Sign into Online Book Store
                                </p>

                                <img src={"https://www.strunkmedia.com/wp-content/uploads/2018/05/bigstock-Print-163213010.png"} height="50" alt="logo" />

                            </div>
                        </div>

                        <CardBody className={"p-4"}>
                            <div className={"p-3"}>
                                <TextField
                                    isRequired={true}
                                    labelText={"Email"}
                                    name={"email"}
                                    value={get(this.state, "formData.email", "")}
                                    errorText={get(this.state, "inputErrors.email", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                <TextField
                                    isRequired={true}
                                    labelText={"Password"}
                                    type={"password"}
                                    name={"password"}
                                    value={get(this.state, "formData.password", "")}
                                    errorText={get(this.state, "inputErrors.password", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                <div className={"d-flex justify-content-end"}>
                                    <ButtonComponent
                                        btnText={"Login"}
                                        isFullWidth={false}
                                        elementStyle={"loginBtn"}
                                        onClickFn={this.onClickFn}
                                    />
                                </div>
                            </div>

                            <div className={"text-center"}>
                                <Link to={"/register"}>Click here to register</Link>
                            </div>
                        </CardBody>

                    </Card>

                </div>
            </div>
        )
    }
}

export default Login;
