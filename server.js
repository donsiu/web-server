var express = require('express');
var app = express();
const PORT = 3000;

var middleware = require('./auth.js');
app.use(middleware.logger);

// default go to index.html
// app.get('/', function(req, res){
//     res.send('Main Page');
// });

app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('About us......');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log("Express Server is running on port: " + PORT );
});