var http = require('http');
const url = require('url');
var fs = require('fs');

const port = 3000;

const timestamp = Date.now();


http.createServer(function(req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;

  fs.readFile(filename, function(err, data) {
    if(err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("(404) Some error... You probably need to include /index.html");
    }
    const url = req.url === '/' ? '/index.html' : req.url;
    if (req.url.includes('js')) res.setHeader('Content-Type', 'application/javascript');
    if (req.url.includes('css')) res.setHeader('Content-Type', 'text/css');
    if (req.url.includes('html')) res.setHeader('Content-Type', 'text/html');

    res.writeHead(200);
    res.write(data);
    return res.end();
  });
}).listen(3000);
