const fs = require('fs');
const emp = {
    id : "5",
    salary : "1000",
    ceo : "Nitin"
};

const jsonData = JSON.stringify(emp);
fs.writeFile("./mynewjson.json",jsonData, (err) => {
    console.log("JSON is created.");
});