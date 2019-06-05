import React, { Component } from 'react';
import MoreDetail from './ViewMore.png'
import './ViewMore.css'
import Location from './placeholder.png'
class ViewMore extends Component {
    render() {
      return (      
  
<div className="viewMore">   
<p className="introduction"><span className="white">HOW WE</span> DO IT</p>
<img className="location" src={Location} alt=""></img> 
<p className="location-text">Cruisine</p>
<div className="dashed-line"/> 
<div className="dashed-line-opposite"/> 
<div className="parallelogram"></div>
<p className="parallelogram-main-text">Generating Instruction</p>
<p className="parallelogram-text">View More</p>
<img className="moreDetail" src={MoreDetail} alt=""></img>
</div>   
)
}
}
export default ViewMore;