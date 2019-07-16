import React, { Component } from 'react';
import axios from 'axios'
import axiosRequest from './axiosPostRequest'
import '../../public/GetJoboffer.css'
class GetJoboffer extends Component {
constructor(props){
    super(props);
    this.state = {
        jobsList : [],
        inputValue : ''
    }
    this.handleOnClick= this.handleOnClick.bind(this);
    this.handleOnChange= this.handleOnChange.bind(this);
    this.search= this.search.bind(this);    
}

componentDidMount(){  
    axios.get('http://localhost:8081/joboffer')
       .then(response => this.setState({
        jobsList : [...response.data]
    },function(){
        console.log(this.state.jobsList)
    }))
}

handleOnClick(event){
    event.preventDefault();
       axiosRequest('http://localhost:8081/filter-category',{job: event.target.name},this)
   
}

search(event){
    event.preventDefault();
       axiosRequest('http://localhost:8081/filter-employer-name',{job: this.state.inputValue},this)
    
}

handleOnChange(event){
    this.setState({
        inputValue:event.target.value
    })}
   

render(){
    const {jobsList} = this.state;
    const jobs = jobsList.length ? (jobsList.map(job=>{
        return(
        <div key={job._id} className="row"> 
        <div className="col-3-sm"><h5>{job.category}</h5></div>
        <div className="col-3-sm"> <p className="start_date">{job.start_date}</p></div>
        <div className="col-3-sm"><p className="end_date">{job.end_date}</p></div>
        <div className="col-3-sm"><p className="employer_name">{job.employer_name}</p></div>
       </div> 
        )
    })) : (<p></p>);
    return(<React.Fragment>
        <div className="container">
         <div className="dropdown">
    <label className="category-label">Filter</label>
    <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
      Category
    </button>
    <div className="dropdown-menu">
      <h5 className="dropdown-header">Category</h5>
      <button onClick={this.handleOnClick} className="dropdown-item" name="IT" href="#">IT</button>
      <button className="dropdown-item"  onClick={this.handleOnClick} name="Courier" href="#">Courier</button>
      <button className="dropdown-item"  onClick={this.handleOnClick} name="Courier" href="#">Courier</button>
      <button className="dropdown-item"  onClick={this.handleOnClick} name="Food & Drinks" href="#">Food & Drinks</button>
      <button className="dropdown-item"  onClick={this.handleOnClick} name="Office" href="#">Office</button>
      <button className="dropdown-item"  onClick={this.handleOnClick} name="Shop assistant" href="#">Shop assistant</button>
    </div>
  </div>
  <form id="get" className="form-group" onSubmit={this.search}>
  <input type="text" className="form-control" value={this.state.inputValue} onChange={this.handleOnChange} placeholder="username"></input>
      <button type="submit" id="submit" className="btn btn-secondary">Search</button>
      </form>
        {jobs}
        </div>
    </React.Fragment>);

}
}

export default GetJoboffer;