const express = require('express');
const axios = require('axios');
var app = express();


app.get('/users',async(req, res)=>{
  try {
    const response = await axios.get('https://randomuser.me/api/?results=10');
    //console.log(response);
    res.send(JSON.stringify(response.data.results))
  } catch (error) {
    console.error(error);
  }
})
.listen(4000, ()=>(console.log('Done!')))

