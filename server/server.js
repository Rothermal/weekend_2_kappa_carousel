/**
 * Created by JFCS on 3/4/16.
 */
var express = require('express');
var index = require('./route/index');
var cohorts = require('./route/cohorts');
var app = express();
var herokuOrPort =  process.env.PORT || 1985;

app.use(express.static('server/public'));


app.get('/cohort/*',cohorts);

app.use('/',index);





var server = app.listen(herokuOrPort,function(){
    var port = server.address().port;
    console.log('Serving Clients successfully since : ', port);
});
