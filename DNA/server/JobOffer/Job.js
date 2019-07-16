var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JobSchema =  new Schema({
    category:{type:String, required:true},
    start_date:{type:Date, required: true},
    end_date:{type:Date, required: true},
    employer_name:{type:String, required:true},
    });
    
module.exports =  mongoose.model('Job', JobSchema);

