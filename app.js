var express = require('express');
var app = express();
var PORT = 3000;

app.get('/', function (req, res) {
  res.send('sumthin else!');
});

app.listen(PORT, function () {
  console.log('App is running on port', PORT);
});