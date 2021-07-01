import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import "../../../../css/dashboard.css";
import "../../../../css/form.css";
import { authDetail } from "../../../common/config";
import profileIcon from "../../../../Images/user.png";

const initialState = {
  title: "",
  conductorName: "",
  file_type: "",
  file_url: "",
  presenter_id: "",
};

class WorkShopPresenterDetails extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    let WorkshopDetails = {
      title: this.state.title,
      conductorName: this.state.conductorName,
      file_type: this.state.file_type,
      file_url: this.state.file_url,
      presenter_id: this.state._id,
    };
    console.log(this.state._id);
    console.log("Details : ", WorkshopDetails);

    axios
      .post(
        "http://localhost:8000/worshop-presenter/add/workshop-details",
        WorkshopDetails,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          toast.success(res.data.message);
        } else {
          if (
            !this.state.title ||
            !this.state.conductorName ||
            !this.state.file_type
          ) {
            toast.error(res.data.message);
          }
        }
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
              <a href="/workshop-dash">
                <i className="fa fa-plus"></i>Arrange Workshop
              </a>
            </li>
            <li >
              <a href="/workshop-dash-details">
                <i className="fa fa-list"></i>Workshop Details
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
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  Title of Workshop
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  Presenter Name
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    name="conductorName"
                    value={this.state.conductorName}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  File Type
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Place"
                    name="file_type"
                    value={this.state.file_type}
                    onChange={this.onChange}
                  />
                </div>

                {/* <div className="form-group">
                  Date of Conferance
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Enter Date"
                    name="date"
                    value={this.state.date}
                    onChange={this.onChange}
                  />
                </div> */}

                <br />
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WorkShopPresenterDetails;
