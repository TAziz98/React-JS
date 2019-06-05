


const initState = {
    listOfRecipes : []
}

const rootReducer = (state=initState, action) => {
    
   switch(action.type){
       case "FETCH_RECIPES":
       return{
           ...state,
           listOfRecipes :action.list.data.recipes
       }
   default:
    return state;
   }
}

export default rootReducer;