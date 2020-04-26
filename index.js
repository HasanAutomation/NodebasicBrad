// const Person=require('./person');

// const person1=new Person("Hasan",22);
// person1.greeting();

const Logger=require('./logger');

const myLogger=new Logger();

myLogger.on('message',(data)=>{console.log('Called listener ',data)});

myLogger.log('Hello world!');