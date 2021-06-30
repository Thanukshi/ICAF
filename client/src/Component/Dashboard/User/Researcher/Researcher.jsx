import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import "../../../../css/dashboard.css";
import { authDetail } from "../../../common/config";
import profileIcon from "../../../../Images/user.png";

class Researcher extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const config = {
      Headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

  

    // axios.interceptors.request.use(
    //   config => {
    //     config.headers.authorization = 
    //   }
    // )

    axios
      .get("http://localhost:8000/users/get-user-details", config)
      .then((res) => {
        console.log(res);
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
            <h2>Researcher</h2>
          </div>
          <ul className="sidebar-nav">
            <li className="active">
              <a href="#">
                <i className="fa fa-home"></i>Home
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-plug"></i>Plugins
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-user"></i>Users
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
              <h2 className="content-title">Test</h2>
              <p>Lorem ipsum...</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Researcher;
