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