import http from 'http';

console.log('I\'m running in a cluster');

const a = { message: 'Im running in a cluster' }; // Define an object with a property

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(a));
}).listen(8000);

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(a));
}).listen(32025);
