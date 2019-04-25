import React from 'react';
import {connect} from 'react-redux'
import fetchModels from '../Actions/ModelRetrieveActions'
import fetchSpecificModel from '../Actions/SpecificModelAction'
import {remove} from '../Actions/RemoveAction'
import {add} from '../Actions/AddAction'
import '../CSS/Menu.css'
class Menu extends React.Component{
    constructor() {
        super();
        this.handleChecked = this.handleChecked.bind(this);  
    }    

 componentWillMount(){
    this.props.fetchAllModels();
     }

     handleChecked(event){
        const modelName = event.target.name;
        const {sortByHotPriceDescription} = this.props;
        const {sortByModelName} = this.props;

        if(event.target.checked){
            this.props.addRequestString(modelName)
            this.props.fetchSpecificOne(sortByModelName.concat(modelName).concat(','),sortByHotPriceDescription);  
        }
        else{
         this.props.removeRequestString(modelName)  
         this.props.fetchSpecificOne(sortByModelName.replace(modelName.concat(","),""),sortByHotPriceDescription); 
        }
        }
  
    render(){

        const {models} = this.props;
        let id=0;
        const modelsList = models.length ? (models.map(modelObj=>{
            id++;
            return(
                <div  key={id} className="custom-control custom-checkbox mb-3">
                <input onChange={this.handleChecked} type="checkbox" className="custom-control-input" id={"customCheck"+id} name={modelObj.model}/>
                <label className="custom-control-label"  htmlFor={"customCheck"+id}> {modelObj.model.toUpperCase()}</label>
              </div>
        )} 
        )) : (<p>no</p>);
        return(
            <div>
                <h6 className="model-selection-title">WYBIERZ MODEL</h6>
            {modelsList}
            </div>
        );
    }
              
}
const mapStateToProps =(state) =>{
    return { 
        models: state.listOfModels,
        sortByModelName : state.requestO,
        sortByHotPriceDescription : state.price
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
      fetchAllModels : ()=>dispatch(fetchModels()), 
      fetchSpecificOne : (request,priceName)=>dispatch(fetchSpecificModel(request,priceName)) ,
      removeRequestString  : (modelName)=>dispatch(remove(modelName)),
      addRequestString: (modelName)=>dispatch(add(modelName))

    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Menu);