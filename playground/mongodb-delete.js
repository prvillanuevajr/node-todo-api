const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err,client) => {
  if (err) {
    return console.log('Unable to connect',err);
  }

  const db = client.db('TodoApp');
  console.log('Connected');

  db.collection('Todos').deleteMany({
    completed: false
  }).then( (res) => {
    console.log(res);
  }).catch( (err) => {
    console.log(err);
  });

  client.close();
})
