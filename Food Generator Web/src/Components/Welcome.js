import React, { Component } from 'react';
import './Welcome.css'
import ChefSalad from './ChefSalad.jpg'
import KingsFood from './KingsFood.jpg'
import RoyalsDish from './RoyalsDish.jpg'
class Welcome extends Component {
  render() {
    return (
<div className="welcome">
<p className="app-name">App G.</p>
<hr className="horizontal-line" />
<h5>WELCOME!</h5>
<p>
I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
<div className="redirect-generate">
<p className="title">Chef Salad</p>
<hr className="hr-line" />


<div id="demo" className="carousel slide" data-ride="carousel">
 <ul className="carousel-indicators">
   <li data-target="#demo" data-slide-to="0" className="active"></li>
   <li data-target="#demo" data-slide-to="1"></li>
   <li data-target="#demo" data-slide-to="2"></li>
 </ul>
 <div className="carousel-inner">
   <div className="carousel-item active">
     <img src={ChefSalad} alt="Los Angeles" width="400" height="230"></img> <div className="carousel-caption">
      
     </div>   
   </div>
   <div className="carousel-item">
     <img src={KingsFood} alt="Chicago" width="400" height="230"></img>
     <div className="carousel-caption">
     
     </div>   
   </div>
   <div className="carousel-item">
     <img src={RoyalsDish} alt="New York" width="400" height="230"></img>
     <div className="carousel-caption">
     
     </div>   
   </div>
 </div>
 <a className="carousel-control-prev" href="#demo" data-slide="prev">
   <span className="carousel-control-prev-icon"></span>
 </a>
 <a className="carousel-control-next" href="#demo" data-slide="next">
   <span className="carousel-control-next-icon"></span>
 </a>
</div>
  <div className="btn-text">
<div className="circle"></div>
<p className="circle-text">View All</p>
</div>
</div>
</div>
)
}
}

export default Welcome;