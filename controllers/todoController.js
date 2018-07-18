var bodyParser = require('body-parser');

var mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://snj:admin1@ds139921.mlab.com:39921/todo');

var todoSchema = new mongoose.Schema({         // MongoDB schema
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);    // MongoDB model

// var itemOne=Todo({item:'buy flowers'}).save(function(err){
//   if(err) throw err;
//   console.log('item saved');
// });

// var data=[{item:'get milk'},{item:' dog'},{item:'kick some coding ass'}];

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {

  app.get('/todo', function (req, res) {
    // get data from mongoDB and pass it to view
    Todo.find({}, function (err, data) {
      if (err) throw err;
      res.render('todo', { todos: data });
    })
  });

  app.post('/todo', urlencodedParser, function (req, res) {
    // get data from view and add it to mongoDB
    var newTodo=Todo(req.body).save(function(err,data){
      if(err) throw err;
      res.json(data);
    })
  });

  app.delete('/todo/:item', function (req, res) {
    // delete requested item from mongoDB
    Todo.find({item:req.params.item.replace(/\- /g, " ")}).remove(function(err,data){
      if(err) throw err;
      res.json(data);
    });
  });

};