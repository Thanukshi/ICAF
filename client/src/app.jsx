import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Navbar from "./Component/Navbar/Navbar";
import Corasoule from "./Component/Corasoule/Corasoule";
import Home from "./Component/Navbar/NavbarItem/Home/Home";
import About from "./Component/Navbar/NavbarItem/About/About";
import Conferance from "./Component/Navbar/NavbarItem/Conference/Conferance";
//import Contact from "./Component/Navbar/NavbarItem/Contact/Contact";
import Contact from "./Component/Navbar/NavbarItem/Contact/Contact";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
         <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/conferance" component={Conferance} />
            <Route path="/con" component={Contact} />
          </Switch>
        </Router> 
     
      </div>
    );
  }
}
