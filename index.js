const http = require('http');

http.createServer(function(req,res){
    res.write('<h1>Welcome everyone</h1>');
    res.end();
}).listen(8081);