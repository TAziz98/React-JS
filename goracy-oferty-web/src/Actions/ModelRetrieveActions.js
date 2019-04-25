import axios from 'axios'

export default function fetchModels(){
    return function(dispatch){  
        axios.get('https://stock.ssangyong.pl/api/getHotModels/')
        .then(response=> dispatch({
        type: "FETCH_MODELS",
        list: response.data
        })
        )}

}