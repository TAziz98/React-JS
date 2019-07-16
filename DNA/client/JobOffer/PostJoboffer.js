import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import axiosRequest from './axiosPostRequest'
import '../../public/PostJoboffer.css'

class PostJoboffer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    category : 'IT',
    start_date : '',
    end_date: '',
    employer_name : ''
    
  }
    this.onChangeInput =  this.onChangeInput.bind(this);
    this.passDataToServer= this.passDataToServer.bind(this); 
   }

   onChangeInput(event){
   this.setState({
    [event.target.name] : event.target.value
  })
}

 passDataToServer(event) {
   event.preventDefault();
    axios.post('http://localhost:8081/joboffer',{userInfo: this.state})
  }
  
    render(){
  return (
    <React.Fragment>
      <form id="post" onSubmit={this.passDataToServer}>
      <select name="category" defaultValue='IT' className="btn btn-secondary dropdown-toggle" onChange={this.onChangeInput}>
       <option value="IT">IT</option>
       <option value="Food & Drinks">Food & Drinks</option>
       <option value="Office">Office</option>
       <option value="Courier" >Courier</option>
       <option value="Shop assistant">Shop assistant</option>
     </select>
     <div className="form-group">
     <input type="text" name="start_date" className="form-control" onChange={this.onChangeInput} placeholder="start_date ex: Dec 25, 1995"></input>
     </div>
     <div className="form-group">
     <input type="text" name="end_date"  className="form-control" onChange={this.onChangeInput} placeholder="end_date ex: Jan 29, 1995"></input>
     </div>
     <div className="form-group">
     <input type="text" name="employer_name" className="form-control" onChange={this.onChangeInput} placeholder="employer_name"></input>
     </div>
     <button type="submit" className="btn btn-primary">Submit</button>
     </form>
     </React.Fragment>
    );
    }
}

export default PostJoboffer;