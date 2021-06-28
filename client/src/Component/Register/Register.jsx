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
      <Container >
        <Row className="mt-0">
          <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
            <h2 className="title">Register Here...</h2>
            <img className="icon-img" src={logo} alt="icon" />
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicOption">
                <Select className="formBasicOption" options={options} />
              </Form.Group>

              <Button variant="primary btn-block" type="submit">
                Register
              </Button>

              <div className="text-left mt-3">
                {/* <a href="#"> */}
                <small className="reset">OR</small>
                {/* </a> */}
              </div>
            </Form>
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
        </Row>
      </Container>
    </div>
  );
};

export default Register;
