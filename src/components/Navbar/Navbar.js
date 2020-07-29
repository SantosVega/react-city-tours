import React, { Component } from "react";
import "./Navbar.scss";
import logo from "../../logo.jpg";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <NavLink className="img" to="/">
          <img src={logo} alt="patagonia tour logo" />
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/tourlist">
              Tours
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
