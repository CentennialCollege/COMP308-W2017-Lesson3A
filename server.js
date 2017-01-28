let express = require('express');
let app = express();

// create the port constant
const port = 3000;

// start listening on the port
app.listen(port);
console.log(`Server started at http://localhost:${port}`);

// ROUTING - mounted our routes

// second route is '/hello'
app.use('/hello', (req, res, next) => {
  res.end("Hello, World!");

  next();
});

// first route is '/' - root of my website
app.use('/', (req, res, next) => {
  res.end("Welcome!");

  next();
});


