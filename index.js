const express = require('express');
const app = express();
const rp = require('request-promise');

const port = process.env.PORT || 4000;
const minutes = process.argv[2];
const timedelay = Math.pow(6, 4) * minutes;
const url1 = process.argv[3];

app.get('/', (req, res, next) => {
  res.send('thanks!');
});


app.listen(port, (req, res, next) => {
  console.log(`Starting a server on port: ${port}`);
  setInterval(ping.bind(null, url1), 1000);
});


function ping(url) {
  console.log('start ping');
  rp({uri: url, json: true})
  .then((data) => {
    console.log('end ping');
  });
  .catch(function(err) {
    console.log(`Error: ${err}`);
  });
}
