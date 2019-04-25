export  const remove = (modelName) =>{
    return{
        type: "REMOVE_REQUEST",
            list: modelName
    }
}