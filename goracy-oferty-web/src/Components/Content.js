import React from 'react';
import {connect} from 'react-redux'
import fetchSpecificModel from '../Actions/SpecificModelAction'
import '../CSS/Content.css'
import ConditionImage from '../Images/Condition.png'
import AvailabilityImage from '../Images/Availability.png'
//import  { Redirect } from 'react-router-dom'
//import { BrowserRouter as Router, Link } from 'react-router-dom'
//import {browserHistory} from "react-router";

class Content extends React.Component{
    constructor() {
        super();
        this.onImageClick = this.onImageClick.bind(this);  
    } 

 componentWillMount(){
    this.props.fetchSpecificModel('','');
     }

     onImageClick(){
       // browserHistory.push("https://www.ssangyong.pl/");
      window.location.href = "https://www.ssangyong.pl/";
     }

    render(){

        const {vehicles} = this.props;
        let statusImage,srp,discount,hot_price,vehicle_color,vehicle_model,image_url,condition,statusBtn,availabilityDescription;
        const vehiclesList = vehicles.length ? (vehicles.map(vehicle=>{
             const {params} = vehicle;
             srp = params.price.srp.replace('&nbsp;',' ');
             discount = params.price.discount.replace('&nbsp;',' ');
             hot_price = params.price.hot_price.replace('&nbsp;',' ');
             vehicle_color = params.color.replace(' ','_').toLowerCase();
             vehicle_model = params.model.toLowerCase();
             image_url = "https://www.ssangyong.pl/konfigurator-images/images/" + vehicle_model+ "/" + params.my + "/colors/cars/" + vehicle_color + ".png"; 
             statusImage = (vehicle.status==='sold') ? <img className="sold" src={AvailabilityImage} alt="availability"/> : '';
             statusBtn = (vehicle.status==='sold') ? <button className="btn btn-light btn-lg ">ZAPYTAJ</button> : <button className="btn btn-danger btn-lg ">ZAPYTAJ</button>;
             condition = (vehicle.new_used==='new') ? 'nowy' : 'stary';
             availabilityDescription = (vehicle.status==='sold') ? <p className="availability-description">SPRZEDANY</p> : '';
             return(

         <div key={vehicle.id} className="row"> 
         {availabilityDescription}
             {statusImage}
             
         <div className="image-section col-sm-4 ">
         <p className="vehicle-title">{params.model} <span className="vehicle-trim">{params.trim}</span></p>
         <p className="condition">{condition.toUpperCase()}</p>
         <img className="condition-image" src={ConditionImage} alt="condition" />
         <img src={image_url}  className="vehicle-image" onClick={this.onImageClick} alt="Illustration of Vulture" width="300"/>
         </div>

         <div className="info-section col-sm-4">
         <h6>{params.engine_capacity}&nbsp;{params.fuel_type.toUpperCase()}&nbsp;{params.transmission.toUpperCase()}{params.gearbox.toUpperCase()}&nbsp;|&nbsp;{params.color.toUpperCase()}</h6>
         <label className="version-label">Wersja:</label>  <p className="version-text">{params.trim}</p>
         <label className="production-year-label">Rok produkcji:</label>  <p className="production-year-text">{params.my}</p>
         <label className="model-year-label">Rok modelowy:</label>  <p className="model-year-text">{params.year}</p>
         <label className="equipment-label">Wyposażenie:</label>  <p className="equipment-text">{params.option}</p>
         </div>

         <div className="price-section col-sm-4">
         <label className="base-price-label">CENA BAZOWA:</label> <p className="base-price-text">{srp}<span className="currency">{params.price.currency}</span></p>
         <label className="discount-label">RABAT:</label> <p className="discount-text">{discount}<span className="currency">{params.price.currency}</span></p>
         <label className="hot_price-label">GORĄCA CENA:</label> <p className="hot_price-text">{hot_price}<span className="hot-price-currency">{params.price.currency}</span></p>
         {statusBtn}
         </div>
         </div>
        )} 
        )) : (<p>no</p>);
        return(
            <div>
            {vehiclesList}
            </div>
        );
    }

  
         
}
const mapStateToProps =(state) =>{
    return { vehicles: state.listOfVehicles
    }
}

export default  connect(mapStateToProps,{fetchSpecificModel})(Content);