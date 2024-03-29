import React, {useContext, useState} from "react";
import {Formik} from "formik";
import {Button, Col, Form, Row, Spinner} from "react-bootstrap";
import * as yup from "yup";
import {FaSignInAlt} from "react-icons/fa";
import {AppContext} from "../../Context/app-context";
import {Link} from "react-router-dom";

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Enter the email"),
  password: yup.string().required("Enter the password")
});

var errorss = "";

const LoginForm = props => {
  const [loading, setLoading] = useState(false);
  const appContext = useContext(AppContext);
  const [errorLogin, seterrorLogin] = useState(null);

  var responseError = "";
  const [loginData, setloginData] = useState({
    email: "",
    password: ""
  });

  const onSubmitHand = async (values, {setSubmitting}) => {
    setLoading(true);
    console.log(values);
    setloginData(values);

    try {
      const response = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });

      const responseData = await response.json();
      console.log(responseData);
      if (!responseData.login) {
        errorss = responseData.message;
        throw new Error(responseData.message);
      }
      responseError = responseData.message;
      // console.log(responseError);
      appContext.login();
      setLoading(false);
    } catch (err) {
      seterrorLogin(err.message);
      console.log(err.message);
      setLoading(false);
    }
    console.log(errorss + " errrrrr");
  };

  return (
    <div className="loginComponentHead">
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
              <Form.Group as={Col} md="12" controlId="validationFormik01">
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
              <Form.Group as={Col} md="12" controlId="validationFormik02">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.password && errors.password}
                  isValid={touched.password && !errors.password}
                />

                {loading && (
                  <Spinner
                    animation="border"
                    style={{textAlign: "center", marginLeft: "44%"}}
                  />
                )}

                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Row>
              <Col md={4}>
                <Button type="submit" style={{}} disabled={isSubmitting}>
                  <FaSignInAlt
                    style={{
                      marginRight: "10px",
                      marginBottom: "3px"
                    }}
                  />
                  Login
                </Button>
              </Col>
              <Col md={2}></Col>
              <Link to="/forgot-password">
                <Col
                  md={6}
                  style={{
                    paddingTop: "7px",
                    fontWeight: "500",
                    color: "red",
                    fontSize: "14px",
                    maxWidth: "100%"
                  }}
                >
                  <span>Forgot Password</span>
                </Col>
              </Link>
            </Row>

            <Row></Row>
            {errorss && <div id="loginServerError">{errorss}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
