var express = require('express');
var app = express();

/* 1. The callback function has 2 parameters, request (req) and response (res).
   2 .The request object (req) represents the HTTP request and has properties for request query
   string, parameters, body, HTTP headers etc. 

   3. Similarly, the response object represents the HTTP response that the Express app sends when it 
   receives an HTTP request.
   */

app.get("/", (req, res) => {
    res.send("Hello, I'm Rwitesh Bera, Welcome to my official website.");
});

app.get("/about", (req, res) => {
    res.send("Hello,This is About page.");
});


app.listen(8080, () => {
    console.log("Server is working properly!");
});