import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const initialState = {
    user: [],
};

class conference extends Component {
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

                    </div>
                    <ul className="sidebar-nav mt-5">

                        <li className="active">
                            <a href="/conference">
                                <i className="fa fa-television"></i>Conference Details
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
                            <div className="p-3" >
                                <h4>Title: {item.title}</h4>
                                <h5>Conductor Name: {item.conductorName}</h5>
                                <h5>Place: {item.place}</h5>
                                <h5>Date: {item.date}</h5>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        );
    }
}

export default conference;
