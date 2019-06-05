import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'
import Carousel from './Components/Carousel'
import ViewMore from './Components/ViewMore'
import HomeText from './Components/HomeText'

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Welcome/>
      <ViewMore/>
      <HomeText/>    
       </div>
    );
  }
}

export default App;
