const express = require('express');
const app = express();
const fs = require('fs');
const mergeAndSort = require('./mergeAndSort');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Content-type", "application/json");
  next();
});

app.get('/report', (req, res) => {
  const report = JSON.parse(fs.readFileSync('data/com.xyz.app.json', 'utf8'));
  const spec = JSON.parse(fs.readFileSync('data/specs.json', 'utf8'));
  res.send(JSON.stringify(mergeAndSort(report, spec)));
});

app.listen(3001)