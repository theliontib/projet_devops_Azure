const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello DevOps depuis Azure et avec CI/CD et bien identifié ! v1002');
});

server.listen(3000, "0.0.0.0" () => {
  console.log('Server running on port 3000');
});
