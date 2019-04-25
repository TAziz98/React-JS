import React from 'react';
import {connect} from 'react-redux'
import '../CSS/Navbar.css'
import fetchSpecificModel from '../Actions/SpecificModelAction'
import {toggle} from '../Actions/ToggleAction'

class Navbar extends React.Component{
  constructor(props){
    super(props);
   
  this.handleOnClick = this.handleOnClick.bind(this);
}

handleOnClick(event){
  const priceName = event.target.name;
  this.props.toggleRequestString(priceName);
  this.props.fetchSpecificOne(this.props.request,priceName);

}
    render(){

        return(
<nav className="navbar navbar-expand-sm  navbar-dark">
  <h5 className="navbar-brand" >
  GORĄCE OFERTY
  </h5>
  <ul className="navbar-nav">
    <li className="nav-item">
    <div className="dropdown">
    <label className="price-label">SORTUJ:</label>
    <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
      CENA
    </button>
    <div className="dropdown-menu">
      <h5 className="dropdown-header">Sortuj Według Ceny</h5>
      <button onClick={this.handleOnClick} className="dropdown-item" name="desc" href="#">DESC</button>
      <button className="dropdown-item"  onClick={this.handleOnClick} name="asc" href="#">ASC</button>
    </div>
  </div>
    </li>
  </ul>
</nav>
        );
    }
}
const mapStateToProps =(state) =>{
  return { request : state.requestO,
  prices : state.price
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    toggleRequestString : (priceName)=>dispatch(toggle(priceName)),
      fetchSpecificOne : (request,priceName)=>dispatch(fetchSpecificModel(request,priceName)) 
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);