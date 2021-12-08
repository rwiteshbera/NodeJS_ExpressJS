const https = require("https");
const url =
  "";

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
