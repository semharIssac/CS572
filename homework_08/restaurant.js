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
  
  db.collection('restaurants').find({name: {$regex: /^Mad/}},{projection:{name: 1, district: 1, cuisine:1, "address.coord": 1}})
  .toArray((error, data) => {
    console.dir(data);

    client.close();
  })
    
  

}