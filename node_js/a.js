
import http from 'http';

console.log(' i m running in cluster');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(a));
}).listen(8000);
