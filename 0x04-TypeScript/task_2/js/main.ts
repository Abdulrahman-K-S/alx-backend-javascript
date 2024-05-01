// Task 5. Advanced types Part 1
interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home"
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break"
    }
    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home"
    }
    getCoffeeBreak(): string {
        return "Cannot have a break"
    }
    workTeacherTasks(): string {
        return "Getting to work"
    }
}

function createEmployee(salary: number | string) {
    if (typeof salary === "number" && salary < 500) {
        return Teacher
    }
    return Director
}

// Task 6. Creating functions specific to employees
function isDirctor(employee: Director | Teacher) {
    return (employee) instanceof Director;
}

function executeWork(employee: Director | Teacher) {
    if (employee instanceof Director) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}