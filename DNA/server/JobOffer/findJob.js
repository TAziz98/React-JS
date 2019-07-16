function findJOB(Job,req,res,optionalParam){
let params = {};
if (typeof req.body != 'undefined' && req.body){
    switch(optionalParam){
        case 'category': params = {'category':req.body.job};
        break;
        case 'employer_name': params = {'employer_name':req.body.job};
    }
}
Job.find(params, function(err,data){
if(err) throw err;
res.end(JSON.stringify(data));
});
}

module.exports= findJOB;