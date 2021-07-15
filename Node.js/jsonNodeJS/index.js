const fs = require('fs');

const bioData = {
    name: "rwitesh",
    age: "20",
    college: "AOT"
};

const jsonData = JSON.stringify(bioData); //stringyfy converts javascript object or value to json data
const objData = JSON.parse(jsonData); //Converts json data to javascript object

// console.log(jsonData);
// console.log(objData);

/*
    1. Convert JS object to JSON
    2. Add to another file
    3. Read File
    4. Again convert back to JS object
    5. consloe.log();
*/

/*
fs.writeFile("myjson.json", jsonData, (err) => {
    console.log("done");
});

*/

fs.readFile("./myjson.json", "utf-8", (err,data)=> {
    const originalData = JSON.parse(data);
    console.log(data); // JSON Data
    console.log(originalData); // JS Object Data
});