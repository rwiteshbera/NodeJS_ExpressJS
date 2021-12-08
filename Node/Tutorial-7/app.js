const request = require("postman-request");

const url = // Put your api key here;

request(url, function (err, res, body) {
  try {
    const data = JSON.parse(body);
    console.log(data);
  } catch {
    console.log("Unable to fetch data");
  }
});
