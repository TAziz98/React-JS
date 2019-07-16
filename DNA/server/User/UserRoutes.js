var express = require('express');
const  router =  express.Router()
var User = require('./User')

router.get('/user',function (req, res){
    User.find({}, function(err,data){
        if(err) throw err;
        res.end(JSON.stringify(data))
    });
});


router.post('/login', function (req, res) {
    const {userInfo} = req.body;
    User({
    login: userInfo.login,
    password:userInfo.password,
   creation_date:new Date(),
}).save(function(err){
    if(err) throw err;
    })
res.end();
 })

router.delete('/user/:id',function (req, res){
    const {id} = req.params;
    User.findByIdAndRemove( String(id).slice(1, id.length),(err,data)=>{
        if(err) {
            return new Error('User was not found!');
          }
        res.end(JSON.stringify(data))
    });
});


router.put('/user/:id', function (req, res){
    const {id} = req.params;
     User.findByIdAndUpdate( String(id).slice(1, id.length),req.body,(err,data)=>{
         if(err) {
             return new Error('User was not found!');
           }
         res.end(JSON.stringify(data))
     });
 });

 module.exports = router; 