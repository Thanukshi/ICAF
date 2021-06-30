import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import RiseLoader from "react-spinners/RiseLoader";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Navbar/NavbarItem/Home/Home";
import About from "./Component/Navbar/NavbarItem/About/About";
import Conferance from "./Component/Navbar/NavbarItem/Conference/Conferance";
import Contact from "./Component/Navbar/NavbarItem/Contact/Contact";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import Researcher from "./Component/Dashboard/User/Researcher/Researcher";
import ActivationEmail from "./Component/Register/ActivationEmail";
import { authDetail } from "./Component/common/config";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const override = css`
    display: block;
    margin-top: 20%;
    border-color: red;
    align-items: center;
    text-align: center;
  `;

  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);

  const {
    avatar,
    createdAt,
    password,
    role,
    updatedAt,
    user_email,
    user_name,
    user_role,
    _id,
    token,
  } = authDetail();
  //console.log("user token : ", token);

  return (
    <div>
      {loading ? (
        <RiseLoader
          color={"#D0021B"}
          loading={loading}
          css={override}
          size={40}
          margin={3}
        />
      ) : (
        <>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} exact />
              <Route path="/conferance" component={Conferance} exact />
              <Route path="/login" component={Login} exact />
              <Route path="/contact" component={Contact} exact />
              <Route path="/register" component={Register} exact />
              <Route path="/research-dash" component={Researcher} exact />
              <Route
                path="/user/activate/:activate_token"
                component={ActivationEmail}
                exact
              />
            </Switch>
          </Router>
        </>
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
