const book = {
    "title": "Think and Grow Rich",
    "author": "Napolean Hill",
    "seller": "Amazon"
  }
  
const fs = require('fs');

const data = JSON.stringify(book);
const parsedData = JSON.parse(data);

// fs.writeFileSync("./data.json", data);
const res_buff = fs.readFileSync('./data.json');
console.log(res_buff);
console.log(res_buff.toString());
