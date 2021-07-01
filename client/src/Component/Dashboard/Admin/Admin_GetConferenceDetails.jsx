import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import "../../../css/dashboard.css";
import { authDetail } from "../../common/config";
import profileIcon from "../../../Images/user.png";

const initialState = {
    user: [],
};

class AdminDash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    state = {};
    componentDidMount() {
        axios.get('http://localhost:8000/editor/get/all-conferance-details')
            .then(response => {
                this.setState({ users: response.data.data });
            })
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
                            <a href="/admin-dash">
                                <i className="fa fa-home"></i>User Details
                            </a>
                        </li>
                        <li>
                            <a href="/admin-dash-conference">
                                <i className="fa fa-plus"></i>Conference Details
                            </a>
                        </li>
                        <li>
                            <a href="/admin-dash-workshop">
                                <i className="fa fa-user"></i>Workshop Details
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
                <h1>
                    Conference Details
                </h1>
                <div className="container">

                    {this.state.users.length > 0 && this.state.users.map((item, index) => (
                        <div key={index} className="card mb-3" >
                            <div className="p-3">
                                <h5>title: {item.title}</h5>
                                <h5>conductorName: {item.conductorName}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        );
    }
}

export default AdminDash;
