import React, { Component } from 'react';
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fetchPosts from '../Components/actions'
import './ViewAll.css'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import NavbarViewAll from './NavbarViewAll';

class ViewAll extends Component {
 

 componentWillMount(){
this.props.fetchPosts('');

 }


  render() {
 const {recipes} = this.props;  
 console.log(recipes)
  const recipesList = recipes.length ? (recipes.map((recipe=>{
  return(
    
		<section id="container" key={recipe.recipe_id} >
      <div className="col-sm-3 thumbnail2"   
				data-title={recipe.title}
				data-description={recipe.publisher}>
        <div className="card" width="400">
        <div className="thumbnail"   
				data-title={recipe.title}
				data-description={recipe.publisher}>
				<img src={recipe.image_url} className="card-img-top" alt="Illustration of Vulture" width="300"/>
        </div>
       <div className="card-body">
       <p className="card-text"><Link to={recipe.publisher_url}><FontAwesomeIcon className="user" icon={faUserCircle}/> {recipe.publisher}</Link></p>
       <p className="rank"><FontAwesomeIcon className="faHeart" icon={faHeart}/> {recipe.social_rank}</p>
       </div>
      </div>
      </div>
		</section>
    
    )} 
  ))):(<div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>);
   
   
    return (
     <div className="ViewAll">
         <NavbarViewAll fetchPosts={this.props.fetchPosts}/>
  
 
         {recipesList}
      </div>
    );
  }
}

const mapStateToProps =(state) =>{
  return { recipes: state.listOfRecipes 
  }
}

export default connect(mapStateToProps,{fetchPosts})(ViewAll);
