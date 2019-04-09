
//Dependencies
const fs = require('fs');
var logger = require('morgan');
const express = require('express');
const grades = require('./grades');
const cors = require('cors');

//Setups
const accessLogStream = fs.createWriteStream(__dirname + '/access.log',{flags: 'a'});
const app = new express();
const port = 3001;

// Middleware
app.use(express.json());
app.use(logger("combined", {stream: accessLogStream}));
app.use(cors());

// Routes
app.get('/grades', function(req, res){
  res.send(grades)
})
app.get('/grades/:id',  function(req, res){
  const id = req.params.id
  const grade = grades.find(a => a.id == id);
  if (grade) res.send(grade)
  else res.send(`Grade with id ${id} does not exist`)
});
app.post('/grades', (req,res)=>{
  console.log(req.body);
  grades.push(req.body);
  res.send(grades);
});
app.delete('/grades/:id', (req, res)=>{
  const id = req.params.id;
  const grade = grades.splice(id - 1,1);
  res.send(grades);
   
});
app.listen(port);