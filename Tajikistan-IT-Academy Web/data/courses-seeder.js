var mongoose = require('mongoose');
var Courses = require('../models/courses');
mongoose.connect('mongodb://test:mytest1@dbh63.mlab.com:27637/todo',{useNewUrlParser: true});

var courses = [new Courses({
   imagePath: "https://jaki-jezyk-programowania.pl/img/csharp.png",  
   departmentImageClass:"fa-code",
   department: "PROGRAMMING",
   Title:"Introduction to C-Sharp",
   courseUrl:"https://www.tutorialspoint.com/csharp",
   decsription:"C # is designed to be a simple, modern, general-purpose, object-oriented language, borrowing key concepts from several other languages, most notably Java. C # could theoretically be compiled to machine code, but in real life, it is always used in combination with the .NET framework.",
   moneyDescription:"FREE ",
   clockDescription:"AVAILABLE NOW",
   calendarDescription:"4 WEEKS"
}),
new Courses({
imagePath: "https://jaki-jezyk-programowania.pl/img/java.png",  
departmentImageClass:"fa-code",
department: "PROGRAMMING",
Title:"Introduction to Java",
courseUrl:"https://www.tutorialspoint.com/java",
decsription:"Java is designed to be a simple, modern, general-purpose, object-oriented language, borrowing key concepts from several other languages, most notably Java. C # could theoretically be compiled to machine code, but in real life, it is always used in combination with the .NET framework.",
moneyDescription:"FREE ",
clockDescription:"AVAILABLE NOW",
calendarDescription:"6 WEEKS"
}),
new Courses({
    imagePath: "http://pawelged.pl/images/logo/javascript.png",  
    departmentImageClass:"fa-code",
    department: "PROGRAMMING",
    Title:"Introduction to Javascript",
    courseUrl:"https://www.tutorialspoint.com/javascript",
    decsription:"JS is designed to be a simple, modern, general-purpose, object-oriented language, borrowing key concepts from several other languages, most notably Java. C # could theoretically be compiled to machine code, but in real life, it is always used in combination with the .NET framework.",
    moneyDescription:"35",
    clockDescription:"AVAILABLE NOW",
    calendarDescription:"2 MONTHS"
    })];
var done=0;
for(var i=0;i<courses.length;i++){
    courses[i].save(function(err,result){
    if(err) throw err;
    done++;
    if(done === courses.length){
        mongoose.disconnect();
    }
    });
}
