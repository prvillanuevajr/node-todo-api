const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err,client) => {
  if (err) {
    return console.log('Unable to connect..',err);
  }
  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
    completed: true
  },
  {
    $set: {
      completed: false,
      // text: 'Review node.js'
    }
  },{returnOriginal: false}).then( (res) => {
    console.log(res);
  }).catch( (err) => {
    console.log(err);
  });

  console.log('Connected..');

  client.close();
});
