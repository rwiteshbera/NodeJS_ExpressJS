const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();
const port = 5050;

const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));

router.get('/', function (req, res) {
    res.sendFile(staticPath + '/index.html');
})

app.get('/about', function (req, res) {
    res.sendFile(staticPath + '/about.html');
})

app.get('/help', function (req, res) {
    res.sendFile(staticPath + '/help.html');
})

app.listen(port, () => {
    console.log(`Server is listening at Port no. ${port}`);
})