const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 12345;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (_, res) => {
  const database = process.argv[2];

  if (!database) {
    res.status(500).send('Database argument is missing');
    return;
  }

  try {
    const result = await countStudents(database);
    res.send(`This is the list of our students\n${result}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
