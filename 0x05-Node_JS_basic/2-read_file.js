const fs = require('fs');

const countStudents = (path) => {
  try {
    const file = fs.readFileSync(path, 'utf-8');
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
