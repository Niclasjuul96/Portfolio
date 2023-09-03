import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Header.scss';
import logo from '../assets/Logo.png';

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
        <div className="logo" onClick={() => {window.location.href = "./"}} >
          <img src={logo} id='logo' alt='placeholder'></img>
        </div>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <nav className={this.state.clicked ? "navbar active" : "navbar"}>
          <ul id="navbar">
            <li>
              <NavLink to="/" onClick={this.handleClick}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={this.handleClick}>About</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" onClick={this.handleClick}>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={this.handleClick}>Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div className='btn'>
          <button className='Hireme' onClick={this.handleRedirect}>Hire me!</button>
        </div>
        
      </div>
    );
  }
}

export default Header;
