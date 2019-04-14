//Dependencies
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

//Configuration
const dbUri = 'mongodb://localhost:27017';
const dbName = 'mum_locations';
const port = 2020;
const collectionName = 'locations';
const mumLocation = {latitude: 41.017654, longitude: -91.9665342};
let database;

//Initializations
const app =express();
const client = new MongoClient(dbUri);

//Middleware
app.use(express());
app.use((req, res, next) => {
  if(!database){
   client.connect((error) =>{
     database = client.db(dbUri);
     req.collection = database.collection(collectionName);
     next();
   })
  }else{
    req.collection = database.collection(collectionName);
    next();
  }
});

//Routes
app.get('/locations', (req, res, next) => {
  req.collection.find({}).toArray((error, data)=>{
    res.json({data: data})
  })
});

app.post('/locations', (req, res, next) =>{
  const location = req.body;
  console.dir(location);
  req.connection.insetrtOne(location);
  
  res.json({status: 200, message:`Location inserted is ${location}`});
});

app.get('/locations/near_mum', (req, res, next) => {
  req.collection
  .find({location: {$near: [mumLocation.longitude, mumLocation.latitude]}})
  .limit(3)
  .toArray((error, location) => {
    console.dir(location);
    res.json(location);
  })
});

//Bootup
app.listen(port, ()=>{
  console.log('We are listning on port 2020..');
  client.close();
})