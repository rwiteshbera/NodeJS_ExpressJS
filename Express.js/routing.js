//www.rwiteshbera.com - welcome to my home page
//about - welcome to my about page
//contact - welcome to my routing page

const express = require('express');
const app = express();
const port = 3000;
//Homepage
app.get('/', (req,res) => {
    res.send("Welcome to my Homepage.");
});

//About Page
app.get('/about', (req,res) => {
    res.send("Welcome to my About.");
});

//Contact Page
app.get('/contact', (req,res) => {
    res.send("Welcome to my Contact.");
});

app.listen(3000, () => {
    console.log(`Server is running in port no ${port}`);
});

