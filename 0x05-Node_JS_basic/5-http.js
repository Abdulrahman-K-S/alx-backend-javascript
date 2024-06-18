const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const PORT = 12345;

const app = http.createServer((req, res) => {
  const parsedURL = url.parse(req.url, true);
  const path = parsedURL.pathname;

  if (path === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (path === '/students') {
    const database = process.argv[2];

    if (!database) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Database argument is missing');
      return;
    }

    countStudents(database)
      .then((result) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`This is the list of our students\n${result}`);
      })
      .catch((err) => {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end(err.message);
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
