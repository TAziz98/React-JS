import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import  '../../public/Create.css'

class Create extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
         login:'',
         password:''
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

handleOnChange(event){
  this.setState({
   [event.target.name] : event.target.value
  })
}

handleOnSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:8081/login',{userInfo: this.state})
}

  render(){
      return(
      <React.Fragment>
        <div id="container">
     <form  onSubmit={this.handleOnSubmit}>
       <div className="form-group">
      <input type="text" name="login" className="form-control" value={this.state.login} onChange={this.handleOnChange} placeholder="login"/> 
      </div>
      <div className="form-group">
      <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleOnChange} placeholder="password"/> 
      </div>
      <button type="submit" className="btn btn-secondary">Sign Up</button>
      </form>
      </div>
      </React.Fragment>
      );
  }
    }

    export default Create;