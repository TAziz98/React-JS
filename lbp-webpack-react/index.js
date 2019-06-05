var express = require('express');
var todoController = require('./Controllers/todoController');
var app = express();

app.set('view engine','ejs');

app.use(express.static('./public'));

todoController(app);

app.listen(8080);