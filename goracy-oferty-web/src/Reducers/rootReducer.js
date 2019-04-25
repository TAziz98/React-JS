const initState = {
    listOfVehicles : [],
    listOfModels: [],
    requestO:'',
    price:''
}

const rootReducer = (state=initState, action) => {
   switch(action.type){
        case "FETCH_SPECIFIC":
       return{
        ...state,
      listOfVehicles:action.list
       }

       case "FETCH_MODELS":
       return{   
           ...state,
           listOfModels :action.list,
       }
       case "ADD_REQUEST":
       return{
           ...state,
           requestO :state.requestO.concat(action.list).concat(",")
       }
       case "REMOVE_REQUEST":
       return{
           ...state,
           requestO :state.requestO.replace(action.list+',',"")
       }
       case "TOGGLE_REQUEST":
       return{
           ...state,
           price :action.list
       }
      
   default:
    return state;
   }
}

export default rootReducer;