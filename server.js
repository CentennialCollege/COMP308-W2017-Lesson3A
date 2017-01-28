let express = require('express');
let app = express();

// create the port constant
const localport = 3000;

/**
 * Get port from environment and store in Express.
 */
let port = process.env.PORT || localport;
app.set('port', port);

// start listening on the port
app.listen(port);
console.log(`Server started at http://localhost:${port}`);

// ROUTING - mounted our routes

// second route is '/hello'
app.use('/hello', (req, res, next) => {
  res.send("Hello World!")
});

// first route is '/' - root of my website
app.use('/', (req, res, next) => {
  res.send("Welcome!");
});

module.exports = app;


