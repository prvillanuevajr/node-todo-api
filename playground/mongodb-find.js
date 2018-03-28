const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
  if (err) {
  return console.log('Unable to connect..', err);
  }
  console.log('Connected..');
  const db = client.db('TodoApp');

  db.collection('Todos').find({completed: true}).toArray().then( (doc_count) => {
    console.log(doc_count);
  })

  client.close();
});
