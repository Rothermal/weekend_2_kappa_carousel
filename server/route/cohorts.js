/**
 * Created by JFCS on 3/5/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/cohort/kappa',function(request,response){
    console.log('hit kappa route');
   response.sendFile(path.join(__dirname,"../cohorts/kappa.json"));
});

router.get('/cohort/theta',function(request,response){
   console.log('youve hit the theta route');
    response.sendFile(path.join(__dirname,"../cohorts/theta.json"));
});

router.get('/cohort/charlie',function(request,response){
    console.log('charlie lives and dies in here');
    response.sendFile(path.join(__dirname,"../cohorts/kappa.json"));
});


module.exports = router;