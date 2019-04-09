const express = require('express');
const axios = require('axios');
var app = express();

 app.enable('trust proxy');
 app.enable('strict routing');
 app.set('x-powered-by', false);
 app.enable('case sensitive routing');
 

//ms('1d');
app.get('/users',async(req, res)=>{
  res.set('Cache-Control', 'public, max-age=31557600');
  try {
    const response = await axios.get('https://randomuser.me/api/?results=10');
    // res.links({
    //   next: 'https://randomuser.me/api/?results=10',
    //   last: 'https://randomuser.me/api/?results=10'
    // });
    //console.log(response);
    res.send(response.data.results)
  } catch (error) {
    console.error(error);
  }
  
  res.json(res.JSONResponse)
})
.listen(4000, ()=>(console.log('Done!')))

