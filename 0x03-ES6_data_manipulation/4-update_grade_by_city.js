export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newGrades
        .filter((grade) => student.id === grade.studentId)
        .map((x) => x.grade)[0];
      const grade = studentGrade || 'N/A';
      return { ...student, grade };
    });
}
