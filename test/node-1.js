
// console.log("Welcome");
// setTimeout(()=>{
 
//   console.log("world!");}, 5000);
//   console.log("Hello")

const http = require("http");

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hello world\n");
}).listen(1337, ()=> console.log('127.0.0.1'));