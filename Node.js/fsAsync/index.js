var fs = require("fs");

// fs.writeFile("biodata.txt","Today is awesome day.", (err) => {
//     console.log("File is created");
// });

fs.readFile("./biodata.txt", "UTF-8",(err,data) => {
    console.log(data);
})