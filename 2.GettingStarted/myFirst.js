let http = require('http'); // Built in HTTP module
// HTTP module enables data tranfer trought HTTP
// This module can create a server that listens to server ports
// and give a response to the client.

let url = require('url') // Build in URL module
// Easily split the query string into readable parts.
// Lets supose the query string is "/?year=2017&month=July"

let date = require('./myFirstModule'); // Created date module

http.createServer((req, res) => {
  res.writeHead(200, {'Content-type': 'text/html'}); // Headers, response and type
  // res.write('Current date and time is:' + date.myDateTime()); // Response to the client
  // res.write(req.url) // Return the Query String that was passed in the URL 

  // Split the query intro readable parts:
  let query = url.parse(req.url, true).query;
  let text = query.year + " " + query.month;

  res.end(text);
}).listen(8080);

