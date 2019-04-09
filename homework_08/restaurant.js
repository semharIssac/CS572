const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017';
const dbName = 'restaurant';
const collectionName = 'restaurants'; 

const client = MongoClient(uri);

client.connect(error => {
  myQueries();
  
})

function myQueries(){
  const db = client.db(dbName);
  const collection =db.collection(collectionName);
  
  collection.find({}).limit(10).toArray((error, data) => {
    console.dir(data);
    client.close();
    
  })

}