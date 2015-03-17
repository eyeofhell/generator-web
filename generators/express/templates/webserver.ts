declare var require;
declare var process;
var express = require('express');

var app = express();
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.listen(app.get('port'), app.get('ip'));

