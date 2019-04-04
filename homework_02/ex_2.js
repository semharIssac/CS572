

Array.prototype.even = function(){

  new Promise((resolve, reject)=> {
    const evenNumbers = this.filter((x)=>x%2==0);
    resolve(evenNumbers);
  }).then((data) => console.log(data));
  
}
//console.log()
[1,2,3,4,5,6,7].even();

Array.prototype.odd = function(){
  new Promise((resolve, reject)=> {
    const oddNumbers = this.filter((x)=>x%2!==0);
    resolve(oddNumbers);
  }).then((data) => console.log(data));
}
//console.log()
[1,2,3,4,5,6,7].odd();