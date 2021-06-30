import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import "../../../css/dashboard.css"
import { authDetail } from "../../common/config";
import profileIcon from "../../../Images/user.png";

const initialState = {
  user: [],
};

class Editor extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  componentDidMount() {
    axios
      .get("http://localhost:8000/users/get-user-details", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        this.setState(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div id="wrapper">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <h2>{this.state.user_name}</h2>
            <h4>{this.state.role}</h4>
          </div>
          <ul className="sidebar-nav mt-5">
            <li className="active">
              <a href="/editor-dash">
                <i className="fa fa-home"></i>Home
              </a>
            </li>
            <li>
              <a href="/editor-dash-conferance">
                <i className="fa fa-plus"></i>Arrange Conferance
              </a>
            </li>
            <li>
              <a href="/editor-dash-profile">
                <i className="fa fa-user"></i>Profile
              </a>
            </li>
          </ul>
        </aside>

        <div id="navbar-wrapper">
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                {/* <a href="#" className="navbar-brand" id="sidebar-toggle">
                <i className="fa fa-bars"></i>
              </a> */}
                <div>
                  <img className="profile-img" src={profileIcon} alt="" />
                </div>
              </div>
            </div>
          </nav>
        </div>

        <section id="content-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="content-title">Editor</h2>
              <p>Lorem ipsum...</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Editor;
