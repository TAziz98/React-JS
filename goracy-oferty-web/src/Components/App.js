import React, { Component } from 'react';

import '../CSS/App.css';
import Content from './Content';
import Navbar from './Navbar'
import Menu from './Menu'

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar/>
      <div className="row">
      <div className="col-sm-2">
     <Menu/>
      </div>
      <div className="col-sm-10">
      <Content/>
      </div>
     </div>
     </React.Fragment>
    );
  }
}

export default App;
