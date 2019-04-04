//Read the IP address
const dns = require('dns');
dns.resolve4('www.mum.edu', (err, addresses) => {
  console.log(addresses);
});

//Read the mum IP address using promise
const {promisify} = require('util');

const resolve = promisify(dns.resolve4);
resolve('www.mum.edu').then((data) => console.log(data));

//Read the mum IP address using await
async function main(){
  try{
    const address = await resolve('www.mum.edu');
    console.log(address);
    
  } catch(err) {
    console.log(err);
    
  }
} 
main();