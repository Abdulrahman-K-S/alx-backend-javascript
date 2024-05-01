// Task 1. Let's build a Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

// Task 2. Extending the Teacher class
interface Directors extends Teacher {
    numberOfReports: number;
}

// Task 3. Printing teachers
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
};

const printTeacher = (firstName: string, lastName: string): string => {
    return `${firstName[0]}. ${lastName}`
};

// Task 4. Writing a class
interface Student {
    firstName: string;
    lastName: string;
}

class StudentClass implements Student {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() { console.log('Currently working') }
    displayName() { console.log(this.firstName) }
}