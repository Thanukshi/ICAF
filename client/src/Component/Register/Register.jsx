import React, { useState, Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Select from "react-select";
import logo from "../../Images/logo.png";
import uiImg from "../../Images/login.png";
import "../../css/Register.css";
import { toast } from "react-toastify";
import { isEmail, isPassword, isMatch } from "./validation/validation";
import axios from "axios";

const options = [
  { value: "researcher", label: "Researcher" },
  { value: "workshopPresenter", label: "Workshop Presenter" },
  { value: "attendee", label: "Attendee" },
];

const initialState = {
  user_name: "",
  user_email: "",
  password: "",
  cf_password: "",
  role: "",
  err: "",
  success: "",
};

const Register = () => {
  const [user, setUser] = useState(initialState);
  const [userRole, setUserRole] = useState("");

  const { user_name, user_email, password, cf_password, role, err, success } =
    user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const onSelected = (data) => {
    console.log(data.target.value);
    setUserRole(data.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:8000/users/register-user", {
          user_name,
          user_email,
          password,
          role,
        })
        .then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            toast.success(res.data.message);
          } else {
            console.log(res.data.message);

            if (!user_name || !user_email || !password || !cf_password) {
              toast.error(res.data.message);
            }

            if (isEmail(user_email)) {
              toast.error(res.data.message);
            }

            if (isPassword(password) || isPassword(cf_password)) {
              toast.error(res.data.message);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) { 
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
            <h2 className="title">Register Here...</h2>
            <img className="icon-img" src={logo} alt="icon" />

            <form onSubmit={handleSubmit}>
              <div>
                <input
                  className="formBasicEmail"
                  type="text"
                  placeholder="Enter username"
                  name="user_name"
                  value={user_name}
                  onChange={handleChangeInput}
                />
              </div>
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

              <div>
                <input
                  className="formBasicPassword"
                  type="password"
                  placeholder="Enter password"
                  name="cf_password"
                  value={cf_password}
                  onChange={handleChangeInput}
                />
              </div>

              <div>
                <select
                  className="formBasicOption"
                  name="role"
                  onChange={handleChangeInput}
                  value={role}
                >
                  <option value="Select" disabled>
                    Select
                  </option>
                  <option value="Workshop Presenter">Workshop Presenter</option>
                  <option value="Researcher">Researcher</option>
                  <option value="Attendee">Attendee</option>
                </select>
              </div>

              <Button variant="primary btn-block" type="submit">
                Register
              </Button>
            </form>

            <div className="text-left mt-3">
              <small className="reset">OR</small>
            </div>

            <br />
            <Link to="/login">
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
