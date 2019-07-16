var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema =  new Schema({
    login:{type:String, required:true},
    password:{type:String, required:true},
    creation_date:{type:Date, required: false}
    });
    
  module.exports =  mongoose.model('User', UserSchema);
