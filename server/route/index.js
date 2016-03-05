/**
 * Created by JFCS on 3/4/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/',function(request,response){

response.sendFile(path.join(__dirname,"../public/views/index.html"));
});


router.get('/*', function(request, response){
    response.redirect('/');
});



module.exports = router;