const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017';
const dbName = 'zips'
const collectionName = 'zipcodes'

const client = MongoClient(uri);

client.connect(error => {
  myAggregation();
})

function myAggregation() {
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  collection.aggregate([
    {$group: 
      {
        _id: {state: "$state", city: "$city"},
        pop: {$sum: "$pop"}
      }
    },
    {$sort: {pop: 1} },
    {$group: {
      _id: "$_id.state",
      bgCity: {$last: "$_id.city"},
      bgPop: {$last: "$pop"},
      smCity: {$first: "$_id.city"},
      smPop: {$first: "$pop"}
    }

      }
   ])
    .limit(100)
    .toArray((error, data) => {
      console.dir(data);
      client.close();
    })
}