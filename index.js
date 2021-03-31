var express = require('express');
var cors = require('cors')
var {urlencoded, json} = require('body-parser');
require('./src/connector/connector')
var service = require("./src/services/index");
var expressApp = express();
expressApp.use(cors());

expressApp.use(urlencoded({ extended: false }))

expressApp.use(json())

expressApp.use('/services', service);

expressApp.listen(3001, function () {
  console.log('Listening on port 3001');
});