const express = require('express');
const axios = require('axios');
var app = express();

app.enable('trust proxy');
app.enable('strict routing');
app.set('x-powered-by', false);

//ms('1d');
app.get('/users',async(req, res)=>{
  try {
    const response = await axios.get('https://randomuser.me/api/?results=10');
    res.links({
      next: 'https://randomuser.me/api/?results=10',
      last: 'https://randomuser.me/api/?results=10'
    });
    //console.log(response);
    res.send(response.data.results)
  } catch (error) {
    console.error(error);
  }
})
.listen(4000, ()=>(console.log('Done!')))

