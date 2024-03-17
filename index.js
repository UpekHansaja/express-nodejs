var express = require('express');
var app = express();

app.get('/',function(request,response){
    response.send('Hello Express');
})

var server = app.listen(3000,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("App available on http://localhost:3000", "\n" + host, "\n" + port);
})