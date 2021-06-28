import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Select from "react-select";

import logo from "../../Images/logo.png";
import uiImg from "../../Images/login.png";
import "./Register.css";

const options = [
  { value: "researcher", label: "Researcher" },
  { value: "workshopPresenter", label: "Workshop Presenter" },
  { value: "attendee", label: "Attendee" },
];

const Register = () => {
  return (
    <div className="background">
      <div className="container mt-0">
        <div className="row">
          <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
            <h2 className="title">Register Here...</h2>
            <img className="icon-img" src={logo} alt="icon" />

            <form>
              <div>
                <input
                  className="formBasicEmail"
                  type="text"
                  placeholder="Enter username"
                />
              </div>
              <div>
                <input
                  className="formBasicEmail"
                  type="email"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <input
                  className="formBasicPassword"
                  type="password"
                  placeholder="Enter password"
                />
              </div>

              <div>
                <Select className="formBasicOption" options={options} />
              </div>

              <Button variant="primary btn-block" type="submit">
                Register
              </Button>
            </form>

            <div className="text-left mt-3">
              <small className="reset">OR</small>
            </div>

            <br />
            <Link to="/login" exact>
              <Button variant="primary btn-block" type="submit">
                Login
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

export default Register;
