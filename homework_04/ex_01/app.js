const os = require('os');
const {Observable} = require('rxjs');


function checkSystem(){
  const oneGB = Math.pow(2, 30);
  const myCompMem = os.totalmem()/oneGB;
  const cores = os.cpus().length;
  if(myCompMem < 4)
  {
    return "This app needs atleast 4 GB of RAM.";
    
  }
  if(cores < 2){
    return "Processor is not supported";
  }
  if((myCompMem >= 4) && (cores >= 2)){
    return "System is checked successfully.";
  }

}
console.log("Checking your system...");
Observable.create(observer => {

 const message = checkSystem();
 observer.next(message);
}).subscribe(data => console.log(data))
