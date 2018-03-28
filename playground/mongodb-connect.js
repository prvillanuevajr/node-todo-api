const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
  if (err) {
  return console.log('Unable to connect', err);
  }
  const db = client.db('TodoApp');
  console.log('Connected');

  db.collection('Todos').insertMany(
  [{
    text: 'Eat lunch',
    completed: true,
  },
  {
    text: 'Eat breakfast',
    completed: true,
  },
  {
    text: 'Eat dinner',
    completed: false,
  }]
).then((res)=>{
    console.log(res.ops);
  }).catch((err)=>{
    console.log(err);
  });

  client.close();
});
