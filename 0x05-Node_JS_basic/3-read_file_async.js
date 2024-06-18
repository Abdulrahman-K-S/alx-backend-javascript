const fs = require('fs').promises;

const countStudents = (path) => fs.readFile(path, 'utf-8')
  .then((file) => {
    const lines = file.trim().split('\n');
    const students = lines.slice(1).filter((line) => line);

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    for (const field in fields) {
      if (fields[field]) {
        const studentCount = fields[field].length;
        const studentList = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${studentCount}. List: ${studentList}`);
      }
    }
  })
  .catch(() => {
    throw new Error('Cannot load the database');
  });

module.exports = countStudents;
