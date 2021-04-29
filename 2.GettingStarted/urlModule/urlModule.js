const http = require('http');
const { URL } = require('url');
const fs = require('fs');

http.createServer((req, res) => {
  let myUrl = new URL ('http://localhost:8080' + req.url)
  let fileName = '.' + myUrl.pathname;
  
  fs.readFile(fileName, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end('404 Not Found');
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
}).listen(8080)