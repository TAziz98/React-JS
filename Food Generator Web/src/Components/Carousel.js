import React, { Component } from 'react';
import './Carousel.css'
import ChefSalad from './ChefSalad.jpg'
import KingsFood from './KingsFood.jpg'
import RoyalsDish from './RoyalsDish.jpg'
class Carousel extends Component {
  render() {
    return (
<div id="demo" className="carousel slide" data-ride="carousel">
 <ul className="carousel-indicators">
   <li data-target="#demo" data-slide-to="0" className="active"></li>
   <li data-target="#demo" data-slide-to="1"></li>
   <li data-target="#demo" data-slide-to="2"></li>
 </ul>
 <div className="carousel-inner">
   <div className="carousel-item active">
     <img src={ChefSalad} alt="Los Angeles" width="400" height="230"></img> <div className="carousel-caption">
       <h3>Chef Salad</h3>
       <p>The best receipts ever!</p>
     </div>   
   </div>
   <div className="carousel-item">
     <img src={KingsFood} alt="Chicago" width="400" height="230"></img>
     <div className="carousel-caption">
       <h3>Royal Dish</h3>
       <p>Thank you, Chicago!</p>
     </div>   
   </div>
   <div className="carousel-item">
     <img src={RoyalsDish} alt="New York" width="400" height="230"></img>
     <div className="carousel-caption">
       <h3>British Breakfast</h3>
       <p>We love the Big Apple!</p>
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
)
}
}

export default Carousel;