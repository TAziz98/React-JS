import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class ViewUser extends React.Component{
  constructor(props) {
    super(props);
  this.state={
      usersList:[]
  }
  }

  componentDidMount(){
    axios.get('http://localhost:8081/user')
       .then(response => this.setState({
        usersList : [...response.data]
    },function(){
     //   console.log(this.state.jobsList)
    }))
}

handleOnClick(event){
  //  usersList.filter()
    axios.delete('http://localhost:8081/user/:'+event.target.name)
    .then(response => console.log(response.data))
}

handleOnUpdate(event){
    console.log(event.target.name)
    axios.put('http://localhost:8081/user/:'+event.target.name)
    .then(response => console.log(response.data))
}

  render(){
    const {usersList} = this.state;
    const users = usersList.length ? (usersList.map(user=>{
        return(
        <div key={user._id} className="row"> 
       <h5>{user.login}</h5>
       <p>{user.password}</p>
       <p>{user.creation_date}</p>
       <button name={user._id} onClick={this.handleOnClick}>Remove</button>
       </div> 
        )
    })) : (<p></p>);

    return(<div>{users}</div>);
  }
  }

  export default ViewUser;