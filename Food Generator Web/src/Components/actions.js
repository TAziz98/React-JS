import axios from 'axios'
export default function fetchRecipes(querySearch){
    return function(dispatch){
        axios.get('https://www.food2fork.com/api/search?key=0af1b0b8234a90cebdb71e0e311732c4&q='+querySearch)
        .then(response=> dispatch({
        type: "FETCH_RECIPES",
        list: response
        })
        )}

}