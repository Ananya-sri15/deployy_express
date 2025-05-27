var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var routes = require('./routes');
app.use('/api', routes);
app.get('/', function (req, res) {
  res.send('Welcome to the API');
});
app.listen(port, function () {
  console.log('Server is running on port ' + port);
});
module.exports=app;