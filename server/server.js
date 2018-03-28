const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');

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

app.get('/todos', (req,res) => {
  Todo.find().then( (docs) => {
    res.send(docs);
  }, (err) => {
    res.send(err);
  })
});

app.get('/todos/:id', (req,res) => {

  if (!ObjectId.isValid(req.params.id)) {
    return res.status(404).send('invalid id');
  }



  Todo.findById( req.params.id ).then( (docs) => {
     if( !docs ) {
      return res.status(400).send();
    }
    res.send({docs});
  }).catch( (err) => {
    res.status(400).send('Id not found');
  })
});

app.listen(3000, () => {
console.log('Started on port 3000');
})
