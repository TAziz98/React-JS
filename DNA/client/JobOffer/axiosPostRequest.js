import axios from 'axios'

function requestAXIOS(url,body,self){
    axios.post(url,body)
   .then(response => self.setState({
       jobsList : [...response.data]
   },function(){
       console.log(this.state.jobsList)
   }))
   .catch(error=>console.log(error))
}

module.exports = requestAXIOS;