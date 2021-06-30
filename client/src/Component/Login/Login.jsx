import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import logo from "../../Images/logo.png";
import uiImg from "../../Images/login.png";
import "../../css/Login.css";
import { toast } from "react-toastify";
import { dispatchLogin } from "../../redux/action/authAction";
import { useDispatch } from "react-redux";

const initialState = {
  user_email: "",
  password: "",
  err: "",
  success: "",
};

const Login = () => {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();

  const history = useHistory();
  const { user_email, password, err, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const [emailError, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = 0;
    if (user_email.length > 10) {
      setError("Email cant be more than 10");
    }

    try {
      axios
        .post("http://localhost:8000/users/login-user", {
          user_email,
          password,
        })
        .then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            const { role } = res.data.data;

            if (role == "Researcher") {
              let i = JSON.stringify(res.data.token);
              let result = i.slice(1, -1);

              localStorage.setItem("user", JSON.stringify(res.data.data));
              localStorage.setItem("token", result);
              console.log("tok", result);
              history.push("/research-dash");
              toast.success(
                res.data.data.user_name + " is logged as " + res.data.data.role
              );
            }

            if (role == "Workshop Presenter") {
              let i = JSON.stringify(res.data.token);
              let result = i.slice(1, -1);

              localStorage.setItem("user", JSON.stringify(res.data.data));
              localStorage.setItem("token", result);
              console.log("tok", result);
              history.push("/workshop-dash");
              toast.success(
                res.data.data.user_name + " is logged as " + res.data.data.role
              );
            }

            if (role == "Attendee") {
              let i = JSON.stringify(res.data.token);
              let result = i.slice(1, -1);

              localStorage.setItem("user", JSON.stringify(res.data.data));
              localStorage.setItem("token", result);
              console.log("tok", result);
              history.push("/attendee-dash");
              toast.success(
                res.data.data.user_name + " is logged as " + res.data.data.role
              );
            }

            if (role == "Editor") {
              let i = JSON.stringify(res.data.token);
              let result = i.slice(1, -1);

              localStorage.setItem("user", JSON.stringify(res.data.data));
              localStorage.setItem("token", result);
              console.log("tok", result);
              history.push("/editor-dash");
              toast.success(
                res.data.data.user_name + " is logged as " + res.data.data.role
              );
            }

            if (role == "Reviewer") {
              let i = JSON.stringify(res.data.token);
              let result = i.slice(1, -1);

              localStorage.setItem("user", JSON.stringify(res.data.data));
              localStorage.setItem("token", result);
              console.log("tok", result);
              history.push("/reviewer-dash");
              toast.success(
                res.data.data.user_name + " is logged as " + res.data.data.role
              );
            }
            localStorage.setItem("firstLogin", true);
            dispatch(dispatchLogin());
          } else {
            console.log(res.data.message);

            if (
              res.data.message ==
              "Password does not mach this thanukshi1234@gmail.com"
            ) {
              toast.error(res.data.message);
            }

            if (!user_email || !password) {
              toast.error(res.data.message);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log("61", err);
      err.response.data.msg &&
        setUser({
          ...user,
          [name]: value,
          err: err.response.data.msg,
          success: "",
        });
    }
  };

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
