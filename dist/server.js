var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();
app.use('/static', express.static('static'));
app.use('/openapi', proxy({
  target: 'http://www.tuling123.com', 
  changeOrigin: true, 
  headers: {
    Referer: 'http://www.tuling123.com'
  }
}
));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.listen(3000);