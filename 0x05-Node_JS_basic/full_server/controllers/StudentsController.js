import readDatabase from '../utils';

class StudentsController {
    static async getAllStudents(req, res) {
        const database = req.query.database;

        try {
            const students = await readDatabase(database);
            let response = 'This is the list of our students\n';

            const fields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
            fields.forEach((field) => {
                response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
            });

            res.status(200).send(response.trim());
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const database = req.query.database;
        const { major } = req.params;

        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const students = await readDatabase(database);
            const majorStudents = students[major];

            if (majorStudents) {
                res.status(200).send(`List: ${majorStudents.join(', ')}`);
            } else {
                res.status(200).send('List:');
            }
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}

export default StudentsController;