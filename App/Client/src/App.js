import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home.js';
import Events from './pages/Events.js';
import About from './pages/About.js';
import Login from './pages/Login.js';
import SearchE from './pages/Search(employee)';
import Payroll from './pages/Payroll.js';
import Findroom from './pages/Findroom.js';
class App extends Component {
  render() {
    return (
      <Router>

      <div>
      <Navbar/>
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/events" component = {Events}/>
      <Route exact path = "/about" component = {About}/>
      <Route exact path = "/login" component = {Login}/>
      <Route exact path = "/findroom" component = {Findroom}/>
      <Route exact path = "/search" component = {SearchE}/>
      <Route exact path = "/payroll" component = {Payroll}/>
      </div>
      </Router>
    );
  }
}

export default App;
