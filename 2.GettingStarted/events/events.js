// Every action in the computer is an Event

// Events Module
// Create, Fire and Listen to events

const events = require('events');
const eventEmitter = new events.EventEmitter();

const myEventHandler = () => {
  console.log('I hear a scream!');
} // Create handler

eventEmitter.on('scream', myEventHandler); // Assign handler to an event

eventEmitter.emit('scream') // Fire the event!