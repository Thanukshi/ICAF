import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
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

  const handlechangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };
  return (
    <div className="background">
      <Container>
        <Row className="mt-0">
          <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
            <h2 className="title">Login Here...</h2>
            <img className="icon-img" src={logo} alt="icon" />
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="user_email"
                  value={user_email}
                  onChange={handlechangeInput}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handlechangeInput}
                />
              </Form.Group>

              <Button variant="primary btn-block" type="submit">
                Login
              </Button>

              <div className="text-left mt-3">
                <a href="/forgot_password">
                  <small className="reset">Forgot Password</small>
                </a>
              </div>
            </Form>
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
        </Row>
      </Container>
    </div>
  );
};

export default Login;
