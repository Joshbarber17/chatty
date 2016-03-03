var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.listen(8017, function(){
  console.log('listening on port 8017')
});
var messages = [{time: null, message: null}];
app.get('/', function(req, res, next) {
res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  })
  res.send(JSON.stringify(messages));
});
app.post('/', function(req, res, next){
  messages.push({
    message: req.body.message,
    time: new Date()
  });
  res.status(200).set({
   'Content-Type': 'application/json',
   'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
   'X-XSS-Protection': '1; mode=block',
   'X-Frame-Options': 'SAMEORIGIN',
   'Content-Security-Policy': "default-src 'self' devmountain.github.io"
 }).send(JSON.stringify(messages));
});
app.options('/', function(req, res, next) {
  res.status(200).set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  })
  .send();
})
