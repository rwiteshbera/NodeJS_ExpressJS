const fs = require('fs');

//Challenge Time
// 1. Create a folder and give a name
// 2. Create a file in it named bio.txt and data into it.
// 3. Add more data into the file at the end of the existing data.
// 4. Read the data without getting the buffer data at first.
// 5. Rename the file name to mybio.txt
// 6. now delete both the file and the folder.

// fs.mkdir("./Rwitesh", (err) => {
//     console.log("Folder created.");
// });

// fs.writeFile("./Rwitesh/bio.txt","I am biodata.", (err,data)=> {
//     console.log("File Created");
// });

// fs.appendFile("./Rwitesh/bio.txt","  Hey, I am Rwitesh.", ()=>{
//     console.log("Data added");
// });

// fs.readFile("./Rwitesh/bio.txt", "utf-8", (err,data)=>{
//     console.log(data);
// });

// fs.rename("./Rwitesh/bio.txt","./Rwitesh/mybio.txt",()=>{
//     console.log("File Renamed.");
// });

// fs.unlink("./Rwitesh/mybio.txt",() => {
//     console.log("File Deleted");
// });

// fs.rmdir("./Rwitesh",()=>{
//     console.log("Directory deleted.");
// });