import React, {useContext, useState} from "react";
import {Formik} from "formik";
import {Button, Card, Col, Form, Row, Spinner} from "react-bootstrap";
import * as yup from "yup";
import {FaSignInAlt} from "react-icons/fa";
import {AppContext} from "../../Context/app-context";
import {Link} from "react-router-dom";

var errorss = "";
var passwordUpdatedd = true;
var userData = {};
var responseData = {
  user: {answer: "red", passwordResetQuestion: "", id: ""}
};
var schema = {};

const UpdatePassword = props => {
  const [emailIsValid, setemailIsValid] = useState(false);
  const [userDetails, setuserDetails] = useState({});

  const [loading, setLoading] = useState(false);
  const appContext = useContext(AppContext);
  const [errorLogin, seterrorLogin] = useState(null);

  var responseError = "";

  const [passwordUpdated, setpasswordUpdated] = useState(true);

  const [loginData, setloginData] = useState({
    email: "",
    password: ""
  });

  if (emailIsValid) {
    schema = yup.object().shape({
      email: yup
        .string()
        .email("MUst be a valid email")
        .required("Enter the email"),
      answer: yup
        .string()
        .required("Enter the password")
        .oneOf(
          [responseData.user.answer, null],
          "Answer isn't match with required"
        ),
      password: yup
        .string()
        .required("Enter the password")
        .min(5, "password must have at least 5 characters"),
      passwordConfirm: yup
        .string()
        .min(3, "min")
        .required("Confirm the password")
        .oneOf([yup.ref("password"), null], "Passwords must match")
    });
  } else {
    schema = yup.object().shape({
      email: yup
        .string()
        .email("MUst be a valid email")
        .required("Enter the email")
    });
  }

  const onSubmitHand = async (values, {setSubmitting}) => {
    setLoading(true);
    console.log(values);
    setloginData(values);

    if (!emailIsValid) {
      try {
        const response = await fetch(
          "http://localhost:5000/users/updatePasswordRequest",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
          }
        );

        responseData = await response.json();

        console.log(responseData);
        if (!responseData.login) {
          errorss = responseData.message;
          throw new Error(responseData.message);
        }
        responseError = responseData.message;

        userData = responseData.user;
        setemailIsValid(true);
        console.log(responseError);
        console.log(responseData.user.answer);
        console.log("userDetails" + userData);
        setLoading(false);
      } catch (err) {
        seterrorLogin(err.message);
        console.log(err.message);
        setLoading(false);
      }
    } else {
      values.id = responseData.user._id;
      try {
        const response = await fetch(
          "http://localhost:5000/users/updatePassword",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },

            body: JSON.stringify(values)
          }
        );

        responseData = await response.json();
        passwordUpdatedd = false;
        console.log(responseData);
        if (!responseData.login) {
          errorss = responseData.message;
          throw new Error(responseData.message);
        }

        responseError = responseData.message;
        console.log(responseError);
        passwordUpdatedd = false;
        setLoading(false);
      } catch (err) {
        seterrorLogin(err.message);
        console.log(err.message);
        setLoading(false);
      }
    }
  };

  return (
    <div className="updatePAsswordComponentHead">
      <div className="container">
        {passwordUpdatedd ? (
          <Row>
            <Col md="5" style={{margin: "auto", marginTop: "102px"}}>
              <Formik
                validationSchema={schema}
                onSubmit={onSubmitHand}
                initialValues={{
                  email: loginData.email,
                  password: loginData.password
                }}
              >
                {({
                    handleSubmit,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors
                  }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik01"
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={touched.email && errors.email}
                          isValid={touched.email && !errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>

                      {emailIsValid ? (
                        <div className="col-md-12">
                          <Form.Group controlId="validationFormik02">
                            <Form.Label>
                              {userData.passwordResetQuestion}
                            </Form.Label>
                            <Form.Control
                              placeholder="Answer"
                              type="text"
                              name="answer"
                              value={values.answer}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.answer && errors.answer}
                              isValid={touched.answer && !errors.answer}
                            />

                            <Form.Control.Feedback type="invalid">
                              {errors.answer}
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group
                            className="d-none"
                            controlId="validationFormik032"
                          >
                            <Form.Control
                              placeholder="Answer"
                              type="text"
                              name="answer"
                              value={responseData.id}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.answer && errors.answer}
                              isValid={touched.answer && !errors.answer}
                            />
                          </Form.Group>
                          <Form.Group controlId="validationFormik056">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                              placeholder="Confirm Password"
                              type="password"
                              name="password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.password && errors.password}
                              isValid={touched.password && !errors.password}
                            />

                            <Form.Control.Feedback type="invalid">
                              {errors.password}
                            </Form.Control.Feedback>
                          </Form.Group>{" "}
                          <Form.Group controlId="validationFormik05">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                              placeholder="Confirm Password"
                              type="password"
                              name="passwordConfirm"
                              value={values.passwordConfirm}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={
                                touched.passwordConfirm &&
                                errors.passwordConfirm
                              }
                              isValid={
                                touched.passwordConfirm &&
                                !errors.passwordConfirm
                              }
                            />

                            <Form.Control.Feedback type="invalid">
                              {errors.passwordConfirm}
                            </Form.Control.Feedback>
                          </Form.Group>{" "}
                        </div>
                      ) : null}

                      {loading && (
                        <Spinner
                          animation="border"
                          style={{textAlign: "center", marginLeft: "44%"}}
                        />
                      )}
                    </Form.Row>
                    <Row>
                      <Col md={12}>
                        <div style={{display: "grid"}}>
                          <Button
                            type="submit"
                            style={{}}
                            disabled={isSubmitting}
                          >
                            <FaSignInAlt
                              style={{
                                marginRight: "10px",
                                marginBottom: "3px"
                              }}
                            />
                            Submit
                          </Button>
                        </div>
                      </Col>
                      <Col md={2}></Col>
                    </Row>

                    <Row></Row>
                    {errorss && <div id="loginServerError">{errorss}</div>}
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col md="7" style={{margin: "auto", marginTop: "102px"}}>
              <Card
                body
                style={{
                  borderBlockColor: "grey",
                  borderWidth: "3px",
                  width: "100%"
                }}
              >
                <p style={{textAlign: "center", fontWeight: "600"}}>
                  Your password has been updated successfully
                </p>{" "}
                <Link to="/signin-signup">
                  <Button style={{width: "100%"}}>Login</Button>
                </Link>
              </Card>
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
};

export default UpdatePassword;
