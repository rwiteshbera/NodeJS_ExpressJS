const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url=="/"){
    res.end("Hello, this is Home");
    } else if(req.url=="/about"){
        res.end("Hello, this is about page");
    } else if(req.url=="/contact"){
        res.end("Hello, this is contact page");
    } else{
        res.writeHead(404, {'Content-type': 'text/html'});
        res.end("<h1>404 Not Found<h1>");
    }
});

server.listen(5000, "127.0.0.1", () => {
    console.log("Listening to the port no. 5000");
});