var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  fs.readFile("." + request.url, 'utf8', function(err, data) {
    if (err) {
      response.writeHead(404, {
        "Content-Type": "text/plain"
      });
      response.end("");
    } else {
      response.writeHead(200, {
        "Content-Type": "text/plain"
      });
      response.end(data);
    }
  });
});

server.listen(8080);

console.log("Server running on http://127.0.0.1:8080/");
