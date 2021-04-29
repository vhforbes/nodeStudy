const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  // Reads a file:
  fs.readFile('demofile.html', (err, data) =>{ 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

  fs.appendFile('newFile.txt', 'Hello Content!', (err) => {
    if (err) throw err
  })
  fs.open('newFile2.txt', 'w', (err, file) => {
    if (err) throw err
    console.log('Saved2!')
  })
  fs.writeFile('newFile3.txt', 'Hey Content Replace!', (err) => {
    if (err) throw err
    console.log('Saved3!')
  })
}).listen(8080);

//// Create and update files methods:
// fs.appendFile()
// Appends content to the end of file. If it doesent exist, create it!

// fs.open()
// Takes a flag as second argument. W is the flag for writing,
//if it the file doesn't exists, it opens for writing.

// fs.writeFile()
// Replaces content in the file or creates it


//// Delete Files:

// fs.unlink()
// Deletes the specified file.

//// Rename Files

// fs.rename('filename', 'newFileName', (err) =>)