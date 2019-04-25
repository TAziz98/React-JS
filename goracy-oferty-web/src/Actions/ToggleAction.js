export  const toggle = (priceName) =>{
    return{
         type: "TOGGLE_REQUEST",
         list: priceName
    }
}