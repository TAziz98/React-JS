var express = require('express');
const  router =  express.Router()
var Job = require('./Job')
const findJOB = require('./findJob')

router.get('/joboffer',function (req, res){
      findJOB(Job,req,res,null);
});

router.post('/joboffer',  function (req, res) {
    const {userInfo} = req.body;
        Job({
        category: userInfo.category,
        start_date:Date.parse(userInfo.start_date),
        end_date:Date.parse(userInfo.end_date),
        employer_name:userInfo.employer_name
    }).save(function(err){
        if(err) throw err;
        })
    res.end();
 });

router.post('/filter-category', function (req, res) {
    findJOB(Job,req,res,'category');
})

router.post('/filter-employer-name', function (req, res) {
   findJOB(Job,req,res,'employer_name');
})

 module.exports = router;