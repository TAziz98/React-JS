var bodyParser = require('body-parser');
var mongoose =require('mongoose');
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', true)
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds225078.mlab.com:25078/todo');
var todoSchema = new mongoose.Schema({
item:String
});
var Todo = mongoose.model('Todo',todoSchema);
var itemOne = Todo({item:'buy flower'}).save(function(err){
  if(err) throw err;
  console.log('item saved');
});

var data = [{item:'getmilk'},{item:'walkdog'},{item:'kicksomecodingass'}]
//var ulrencodedParser = bodyParser.urlencoded({extended:false});
//<img onclick="imageClick()"  id="myimage"  src="../public/assets/carousel3.jpg" />
module.exports = function(app){
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    app.get('/todo',function(req,res){
        Todo.find({},function(err,data){
            if(err) throw err;
     res.render('todo',{todos:data});  
        })
    });

    app.post('/todo',function(req,res){
        console.log(req.body);
        var newTodo = Todo(req.body).save(function(err,data){
            if(err) throw err;
          res.json(data);           
        })
    });

    app.delete('/todo/:item',function(req,res){
        Todo.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
            if(err) throw err;
            res.json(data);
        })
    });

}