const EventEmitter=require('events');

//create a class
class MyEmitter extends EventEmitter{}

//Init object
const myEmitter=new MyEmitter();

//Init event listener
myEmitter.on('event',()=>console.log('Event fired'));

//emit the event
myEmitter.emit('event');