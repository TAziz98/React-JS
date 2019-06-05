import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './NavbarViewAll.css'
class NavbarViewAll extends Component {
  constructor(props){
    super(props);
    this.state = {searchingField:''};  
  this.handleOnChange = this.handleOnChange.bind(this);
  this.handleOnSubmit = this.handleOnSubmit.bind(this);
}

  handleOnChange(event){
    console.log(event.target.value);
    this.setState({
     searchingField:event.target.value
     
    })
    
  }
 handleOnSubmit(e){
  this.props.fetchPosts(this.state.searchingField);
  e.preventDefault();
  return false;
 
 }

render(){
    return(
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<form onSubmit={this.handleOnSubmit}> 
<div className="input-group mb-1">
  <input type="text" class="form-control"  value={this.state.searchingField} onChange={this.handleOnChange} placeholder="Type name of food" id="inputField" name="inputField"/>
  <div className="input-group-append">
    <span className="input-group-text"><FontAwesomeIcon icon={faSearch} /></span>
  </div>
</div>
</form>
</nav>
    )

}
}



export default NavbarViewAll;