import React, { Component } from "react";
import { Card, CardBody } from 'reactstrap';
import get from "lodash.get";
import axios from "axios";
import Swal from "sweetalert2";

import "../login/login.css";
import TextField from "../../components/text-field/TextField";
import ButtonComponent from "../../components/button/Button";
import { isEmpty } from "../../helpers/common.helpers";
import Loader from "../../components/loader/Loader";
import { userAPI } from "../../configs/config";


class Register extends Component {
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

    onSubmitFn = () =>{
        let { history } = this.props;

        if (this.validateFn(this.state.formData)) {

            this.setState({
                ...this.state,
                inputErrors: {},
                loader: true
            }, () => {

                axios.post(userAPI, this.state.formData)
                    .then((result) => {

                        this.setState({
                            ...this.state,
                            loader: false
                        }, () => {

                            Swal.fire({
                                icon: 'success',
                                title: 'Successfully Registered',
                                showConfirmButton: false,
                                timer: 2000
                            })
                            .then((result) => {
                                history.push("/");
                            })
                        })
                    })
                    .catch((error) => {
                        this.setState({
                            ...this.state,
                            loader: false
                        })
                    })
            })
        }
    }

    validateFn = (formObj) => {
        let errors = {}

        if (isEmpty(formObj.full_name)) {
            errors["full_name"] = "Full Name is required";
        }

        if (isEmpty(formObj.email)) {
            errors["email"] = "Email is required"
        }

        if (isEmpty(formObj.password)) {
            errors["password"] = "Password is required"
        }

        if (isEmpty(formObj.confirm_password)) {
            errors["confirm_password"] = "Confirm Password is required"
        } else {
            if (formObj.password !== formObj.confirm_password) {
                errors["confirm_password"] = "Password and Confirm Password should be same";
            }
        }

        if (Object.keys(errors).length > 0) {
            this.setState({
                ...this.state,
                inputErrors: errors
            });

            return false;
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
                    ) : null
                }
                <div className={"loginWrapper"}>

                    <Card className={"overflow-hidden"}>
                        <div className={"loginHeader"}>
                            <div className={"text-primary text-center p-4"}>

                                <h5 className={"text-white font-size-20"}>
                                    Register
                                </h5>

                                <p className={"text-white-50"}>
                                    Register into Online Book Store
                                </p>

                                <img src={"https://www.strunkmedia.com/wp-content/uploads/2018/05/bigstock-Print-163213010.png"} height="50" alt="logo" />

                            </div>
                        </div>

                        <CardBody>
                            <div>
                                <TextField
                                    isRequired={true}
                                    labelText={"Full Name"}
                                    name={"full_name"}
                                    value={get(this.state, "formData.full_name", "")}
                                    errorText={get(this.state, "inputErrors.full_name", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

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

                                <TextField
                                    isRequired={true}
                                    labelText={"Confirm Password"}
                                    type={"password"}
                                    name={"confirm_password"}
                                    value={get(this.state, "formData.confirm_password", "")}
                                    errorText={get(this.state, "inputErrors.confirm_password", "")}
                                    onChangeFn={(event) => this.onChangeFn(event)}
                                />

                                <div className={"d-flex justify-content-end"}>
                                    <ButtonComponent
                                        btnText={"Register"}
                                        isFullWidth={false}
                                        elementStyle={"loginBtn"}
                                        onClickFn={this.onSubmitFn}
                                    />
                                </div>
                            </div>
                        </CardBody>

                    </Card>

                </div>
            </div>
        )
    }
}

export default Register;
