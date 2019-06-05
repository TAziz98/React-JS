var mongoose = require('mongoose');

var SchemaCourses = mongoose.Schema({
    imagePath: {type:String, required: true},  
   departmentImageClass:{type: String, required:true},
   department: {type: String, required: true},
   Title:{type: String, required: true},
   courseUrl:{type: String, required: false},
   decsription:{type: String, required: false},
   moneyDescription:{type: String, required:true},
   clockDescription:{type: String, required: true},
   calendarDescription:{type: String, required: true}
});
module.exports = mongoose.model('Course',SchemaCourses);