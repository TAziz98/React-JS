
export default function fetchSpecificModel(request,requestPrice){
  const requestedPrice = (requestPrice===undefined) ? '' : requestPrice
    return function(dispatch){
        fetch('https://stock.ssangyong.pl/api/getHotoffers/', {  
            method: 'post',  
            headers: {  
              "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
            },  
            body: 'model='+request+'&sort[hot_price]='+requestedPrice
          })
          .then(response=>response.json())
           .then(response=>
            dispatch({ 
        type: "FETCH_SPECIFIC",
        list: response
         }))
          .catch(function (error) {  
            console.log('Request failed', error);  
          });
      
    }
}
