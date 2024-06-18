import fs from 'fs';
import readline from 'readline';

const readDatabase = async (filePath) => {
    const studentsByField = {};

    try {
        const fileStream = fs.createReadStream(filePath);
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        for await (const line of rl) {
            if (line.trim()) {
                const [firstname, , , field] = line.split(',');

                if (!studentsByField[field]) {
                    studentsByField[field] = [];
                }
                studentsByField[field].push(firstname);
            }
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }

    return studentsByField;
};

export default readDatabase;