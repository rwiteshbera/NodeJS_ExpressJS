const https = require("https");
const url =
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=24a1ff353b592cebd11cbeea85093345";

const request = https.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    
    if(body.cod === '404') {
        console.error('Internal Error');
    } else {
        console.log(body);
    }
  });
});

request.end();
