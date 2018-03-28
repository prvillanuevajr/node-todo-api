const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./model/todo');
const {User} = require('./model/user');

var app = express();
app.use(bodyParser.json());
app.post('/todos', (req,res) => {

  res.send(req.body);
  var todo = new Todo(
    req.body
  );

  todo.save().then( (doc) => {
    res.send(doc);
  }, (err) => {
    res.send(err);
  });

});

app.listen(3000, () => {
console.log('Started on port 3000');
})
