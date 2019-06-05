var mongoose = require('mongoose');
 var bcrypt = require('bcrypt-nodejs');

var schemaUser = mongoose.Schema({
    email:{type: String, required: true},
    password:{type: String, required: true}
});
schemaUser.methods.encryptPassword = function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(5),null);
}
schemaUser.methods.validatePassword = function(password){
    return bcrypt.compareSync(password,this.password);
}
module.exports = mongoose.model('User',schemaUser);