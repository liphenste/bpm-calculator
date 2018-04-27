const http = require('http');
const fs = require('fs'); //filesystem

// arrow functions: (param1 .. paramN) => { statements }
fs.readFile('index.html', (err, html) => {
  if(err){
    throw err;
  }
  const hostname = 'localhost';
  const port = 3000;

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html'); //text/plain shows src
    res.write(html);
    res.end();
  });

  server.listen(port, hostname, () => {
    console.log('Server started on port ' + port);
  });
})

