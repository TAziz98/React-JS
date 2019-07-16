import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PostJoboffer from './JobOffer/PostJoboffer'
import GetJoboffer from './JobOffer/GetJoboffer'
import ViewUser from './User/ViewUser'
import Create from './User/Create'
import '../public/Navbar.css'
class Navbar extends Component {
 constructor(probs){
   super(probs)

 }

render(){
    return(
        <Router>
               <React.Fragment>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand" href="#">DNA</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/get-joboffer">Job Offers</Link>
            </li>
            <li className="nav-item" >
            <Link to="/post-joboffer">Post Job Offer</Link>
            </li>
            <li className="nav-item">
            <Link to="/users">Users</Link>
            </li>  
            <li className="nav-item">
            <Link to="/signup">Sign Up</Link>
            </li>   
          </ul>
        </div>  
      </nav>
      <Route exact path="/post-joboffer" component={PostJoboffer} />
        <Route path="/get-joboffer" component={GetJoboffer} />
        <Route path="/signup" component={Create} />
        <Route path="/users" component={ViewUser} />
        </React.Fragment>
      </Router>

    );
}

}



export default Navbar;