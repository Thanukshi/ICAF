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
import AddResearchPapaer from "./Component/Dashboard/User/Researcher/AddResearchPapaer";
import ResearcherProfile from "./Component/Dashboard/User/Researcher/ResearcherProfile";
import WorkShopPresenter from "./Component/Dashboard/User/Workshop/WorkShopPresenter";
import Attendee from "./Component/Dashboard/User/Attendee/Attendee";
import OtherRegisters from "./Component/Register/OtherRegisters";
import Editor from "./Component/Dashboard/Editor/Editor";
import EditorConferance from "./Component/Dashboard/Editor/EditorConferance";
import EditorProfile from "./Component/Dashboard/Editor/EditorProfile";
import WorkShopPresenterDetails from "./Component/Dashboard/User/Workshop/WorkShopPresenterDetails";
import AdminDash from "./Component/Dashboard/Admin/Admin_GetUserDetails";
import AdminWorkshop from "./Component/Dashboard/Admin/Admin_GetWorkshopDetails";
import AdminConference from "./Component/Dashboard/Admin/Admin_GetConferenceDetails";
import ReviewerConference from "./Component/Dashboard/Reviewer/ReviewerGetConference";
import ReviewerWorkshop from "./Component/Dashboard/Reviewer/ReviewerGetWorkshop";
import Conference from "./Component/Dashboard/Conference";


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
              <Route path="/other-register" component={OtherRegisters} exact />
              <Route path="/research-dash-details" component={Researcher} exact />
              <Route path="/research-dash" component={AddResearchPapaer} exact />
              <Route path="/research-dash-profile" component={ResearcherProfile} exact />
              <Route path="/workshop-dash" component={WorkShopPresenterDetails} exact />
              <Route path="/workshop-dash-details" component={WorkShopPresenter} exact />
              <Route path="/attendee-dash" component={Attendee} exact />
              <Route path="/editor-dash" component={Editor} exact />
              <Route path="/editor-dash-conferance" component={EditorConferance} exact />
              <Route path="/editor-dash-profile" component={EditorProfile} exact />
              <Route path="/admin-dash" component={AdminDash} exact />
              <Route path="/admin-dash" component={AdminDash} exact />
              <Route path="/admin-dash-workshop" component={AdminWorkshop} exact />
              <Route path="/admin-dash-conference" component={AdminConference} exact />
              <Route path="/conference" component={Conference} exact />
              <Route path="/reviewer-conference" component={ReviewerConference} exact />
              <Route path="/reviewer-workshop" component={ReviewerWorkshop} exact />


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
