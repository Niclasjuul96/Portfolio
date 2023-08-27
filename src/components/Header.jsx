import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Header.scss';
import logo from '../assets/logo.png'

class Header extends Component {
  state = {
    clicked: false
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleRedirect = () => {
    window.location.href = "./contact";
  };

  render() {
    return (
      <div className="Header-container">
        <div className="logo">
          <img src={logo} id='logo' alt='placeholder'></img>
        </div>
        <nav className="navbar">
          <ul
            id="navbar"
            className={this.state.clicked ? "active" : ""}
          >
            <li>
              <NavLink
                to="/"
                onClick={this.handleClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={this.handleClick}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                onClick={this.handleClick}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={this.handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className='Hireme' onClick={this.handleRedirect}>Hire me!</button>
      </div>
    );
  }
}

export default Header;
