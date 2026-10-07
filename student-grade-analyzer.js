class Student {
constructor(name, marks) {
this.name = name;
this.marks = marks;
}
getGrade() {
if (this.marks >= 85) {
return "A";
} else if (this.marks >= 70) {
return "B";
} else if (this.marks >= 50) {
return "C";
} else {
return "F";
}
}
}
const students = [
new Student("Ali", 78),
new Student("Aisha", 92),
new Student("Bilal", 41),
new Student("Sara", 65),
new Student("Ahmed", 88),
new Student("Hina", 50)
];
const passingStudents = students.filter(
(student) => student.marks >= 50
);
const passingNames = passingStudents.map(
(student) => student.name
);
console.log("Passing students:", passingNames.join(", "));
const totalMarks = students.reduce(
(sum, student) => sum + student.marks,
0
);
const classAverage = totalMarks / students.length;
console.log("Class average:", classAverage);
const sortedStudents = [...students].sort(
(a, b) => b.marks - a.marks
);

const [topper] = sortedStudents;
students.forEach((student) => {
const status = student.marks >= 50 ? "Pass" : "Fail";
console.log(
`${student.name}: ${student.marks} -> ${status}`
);
});
students.forEach((student) => {
const status = student.marks >= 50 ? "Pass" : "Fail";
console.log(
`${student.name}: ${student.marks} -> ${student.getGrade()} -> ${status}`
);
});