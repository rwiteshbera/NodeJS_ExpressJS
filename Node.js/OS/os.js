const os = require('os');
const arch = os.arch();
console.log(arch);

const platform = os.platform();
console.log(platform);

const freeMemory = os.freemem()/1024/1024/1024; // Return the free memory in bytes as in integer
console.log(freeMemory);

const totalMemory = os.totalmem()/1024/1024/1024; // Return the total memory in bytes as in integer
console.log(totalMemory);

console.log(os.hostname());

console.log(os.release());

console.log(os.uptime()/60); // uptime() returns uptime in seconds

console.log(os.type());