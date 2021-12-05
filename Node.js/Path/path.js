const path = require('path');

console.log(path.dirname("/home/rwitesh/Desktop/NodeJS-Code/Path/path.js"));

console.log(path.extname("/home/rwitesh/Desktop/NodeJS-Code/Path/path.js")); // Return extension name of the current file

console.log(path.basename("/home/rwitesh/Desktop/NodeJS-Code/Path/path.js")); // Return the file name

console.log(path.parse("/home/rwitesh/Desktop/NodeJS-Code/Path/path.js"));

const myPath = path.parse("/home/rwitesh/Desktop/NodeJS-Code/Path/path.js");
console.log(myPath.name);
console.log(myPath.dir);