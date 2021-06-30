import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import "../../../../css/dashboard.css";
import { authDetail } from "../../../common/config";
import profileIcon from "../../../../Images/user.png";

const initialState = {
  user: [],
};

class Admin extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  componentDidMount() {
    let user = {};
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
    return user;
  }

  render() {
    return (
      <div className="container">
        <h1>
          Courses
        </h1>
        {this.state.courses.length > 0 && this.state.courses.map((item, index) => (
          <div key={index} className="card mb-3" >
            <div className="p-3">
              <h5>Name: {item.name}</h5>
              <h5>Lecture_in_charge: {item.lecture_in_charge}</h5>
              <h5>Code: {item.code}</h5>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Admin;
