// Node.js has a built-in module, called "Events", where you can create- ,fire-, and listen for- your own events.
// Every action on a computer is an event. Like when a connection is made or a file is opened.
// Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file.

const EventEmmitter = require("events");
const event = new EventEmmitter();

// const EventEmmitter = new event.EventEmmitter();



