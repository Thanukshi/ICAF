import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import logo from "../../Images/logo.png";
import uiImg from "../../Images/login.png";
import "./Login.css";

const initialState = {
  user_email: "",
  password: "",
  err: "",
  success: "",
};

const Login = () => {
  const [user, setUser] = useState(initialState);

  const { user_email, password, err, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async = (e) => {
    e.preventDefault();
    try {
      const res =  axios.post("http://localhost:8000/users/login-user", {
        user_email,
        password,
      });
      console.log(res);
    } catch (err) {
      err.response.data.msg &&
        setUser({
          ...user,
          [name]: value,
          err: err.response.data.msg,
          success: "",
        });
    }
  }

  return (
    <div className="background">
      <div className="container mt-0">
        <div className="row">
          <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
            <h2 className="title">Login Here...</h2>
            <img className="icon-img" src={logo} alt="icon" />
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  className="formBasicEmail"
                  type="email"
                  placeholder="Enter email"
                  name="user_email"
                  value={user_email}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <input
                  className="formBasicPassword"
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={password}
                  onChange={handleChangeInput}
                />
              </div>

              <Button variant="primary btn-block" type="submit">
                Login
              </Button>
              <div className="text-left mt-3">
                <a href="#">
                  <small className="reset">Fogort Password</small>
                </a>
              </div>
            </form>

            <br />
            <Link to="/register">
              <Button variant="primary btn-block" type="submit">
                Register
              </Button>
            </Link>
          </Col>

          <Col lg={8} md={6} sm={12}>
            <img className="back" src={uiImg} alt="" />
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Login;