const http = require('http');
const date = require('./modules');
const fs = require('fs');

var express = require("express");
var app = express();

app.use(express.static("public"));

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) => {
  if (err){
    throw err;
  }

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write(html);
    // res.write("The date and time are currently: " + date.myDateTime());
    res.end();
  });

  server.listen(port, hostname, () => {
    console.log('Server started on port ' + port);
  });



});
