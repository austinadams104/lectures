var http = require('http');
var fs = require("fs");

var names = ["bob", "phil", "james"];
var htmlstart = "<!DOCTYPE><html><head><title>Hello</title></head><body>"
var htmlend = "</body></html>";

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(htmlstart + names[0] + htmlend);
});

server.listen(8080);

console.log("server running on http://127.0.0.1:8080");
