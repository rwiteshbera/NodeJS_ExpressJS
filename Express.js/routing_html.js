const express = require('express');
const path = require('path');
const app = express();
const port = 3500;


const staticPath = path.join(__dirname, "./SampleWebpage");

//built-in middleware
app.use(express.static(staticPath));

app.get('/', function (req, res) {
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});