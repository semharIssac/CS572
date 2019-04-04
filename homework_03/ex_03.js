// Using readfileSync
const fs = require('fs');
const path = require('path');

require('http').createServer(function(req,res){
  res.writeHead(200, {'Content-Type': 'video/mp4'})
  //readBigFileSync(res);
  //readBigFileAsync(res);
  readBigFileAsStream(res)
}).listen(4000, ()=>{console.log('Done!');
});

const pathToFile = path.join(__dirname, 'mongoose.mp4');

function readBigFileSync(response){
 const data = fs.readFileSync(pathToFile);
 response.write(data);
}

//Using readfile Asyncronousely

function readBigFileAsync(response){
 fs.readFile(pathToFile, function(err, data){
  response.write(data);
 });

}

//Using Stream
function readBigFileAsStream(response){
  const dataStream = fs.createReadStream(pathToFile);
 dataStream.pipe(response);
}
