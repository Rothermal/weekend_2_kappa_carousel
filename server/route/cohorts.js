/**
 * Created by JFCS on 3/5/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var needle = require('needle');

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
    response.sendFile(path.join(__dirname,"../cohorts/charlie.json"));
});

router.get('/cohort/iota',function(request,response){
    console.log('Iota Iota Iota');
    response.sendFile(path.join(__dirname,"../cohorts/iota.json"));
});

router.get('/cohort/movie/:id',function(req,res){
    //console.log('movie route fired');
    //console.log(req.params.id);
    var movieTitle = req.params.id;
    var url = "http://www.omdbapi.com/?";
    var results = {};
    //console.log(movieName);
    needle.request('get',url,
        {
       "t":movieTitle,
       "r":"json"
        },
       function(error,response){
           //console.log(response.body.Title);
           results = response.body.Poster;
           //console.log(results);
           res.send(results);
    });

});

module.exports = router;