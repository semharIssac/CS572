
//build pseudocode
const EventEmitter = require('events');
class Gym extends EventEmitter {
  constructor() {
    super();
    setInterval(()=> {this.emit("boom")}, 1000)
  }
}

//creat an instance
const gym = new Gym();
gym.on('boom',()=>{console.log('Athlet is working!');}
)