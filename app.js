var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('hello, Lenyn');
});

app.listen(process.env.PORT || 5000);

