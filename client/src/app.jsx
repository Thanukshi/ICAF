import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import RiseLoader from "react-spinners/RiseLoader";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Navbar from "./Component/Navbar/Navbar";
import Corasoule from "./Component/Corasoule/Corasoule";
import Home from "./Component/Navbar/NavbarItem/Home/Home";
import About from "./Component/Navbar/NavbarItem/About/About";
import Conferance from "./Component/Navbar/NavbarItem/Conference/Conferance";
//import Contact from "./Component/Navbar/NavbarItem/Contact/Contact";
import Contact from "./Component/Navbar/NavbarItem/Contact/Contact";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import "./App.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
              <Route path="/about" component={About} />
              <Route path="/conferance" component={Conferance} />
              <Route path="/login" component={Login} />
              <Route path="/contact" component={Contact} />
              <Route path="/register" component={Register} />
            </Switch>
          </Router>
        </>
      )}
      <ToastContainer/>
    </div>
  );
}

export default App;
