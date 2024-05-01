interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Abdulrahman',
    lastName: 'Khaled',
    age: 20,
    location: 'Egypt-Cairo'
};

const student2: Student = {
    firstName: 'Omar',
    lastName: 'Khaled',
    age: 17,
    location: 'Egypt-Cairo'
};

const studentsList = [student1, student2];

const renderTable = (students: Student[]) => {
    const table = document.createElement("table");
  
    const headerRow = table.insertRow();
    const header1 = document.createElement("th");
    const header2 = document.createElement("th");
    header1.textContent = "First Name";
    header2.textContent = "Location";
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
  
    students.forEach((student) => {
      const row = table.insertRow();
      const cell1 = row.insertCell();
      const cell2 = row.insertCell();
      cell1.textContent = student.firstName;
      cell2.textContent = student.location;
    });
  
    document.body.appendChild(table);
};
  
renderTable(studentsList);
  