var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Docker, Kubernetes e PaaS per un approccio DevOps-oriented");
});

server.listen(9000);
console.log("Server listening at http://127.0.0.1:9000/");
