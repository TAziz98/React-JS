import React, { Component } from 'react';
import './Navbar.css'
import Logo from './logo.png'
class Navbar extends Component {
  render() {
    return (
   <div className="super-navbar">   
   <nav className="navbar navbar-expand-md navbar-dark">
   <a className="navbar-brand" href="https://www.google.com/"><img className="logo" src={Logo} alt=""></img></a>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
   <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="collapsibleNavbar">
   <ul className="navbar-nav">
   <li className="nav-item">
   <a className="nav-link" href="https://www.google.com/">Home</a>
   </li>
   <li className="nav-item">
   <a className="nav-link" href="https://www.google.com/">Contact</a>
   </li>
   <li className="nav-item">
   <a className="nav-link" href="https://www.google.com/">Detail</a>
   </li>
   <li className="nav-item">
   <a className="nav-link" href="https://www.google.com/">About<i class="fal fa-search"></i></a>
   </li>
   </ul>
   </div>
   </nav>
   </div>  
)
}
}

export default Navbar;
