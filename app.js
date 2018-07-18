var express = require('express');
var app=express();
var todoControllers=require('./controllers/todoController.js');

// set up template engine
app.set('view engine','ejs');

// static files
app.use(express.static('./public'))

// fire controllers
todoControllers(app);


// listen to a port
app.listen(3000);
console.log("You're listening to port 3000");