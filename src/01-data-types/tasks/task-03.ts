/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

// Type definition
type Student = {
    studentID: string;
    studentName: string;
    studentAge: number;
    studentStatus: boolean;
}

// Student 1
const student1: Student = {
    studentID: "TS01234567",
    studentName: "Nadia Putri",
    studentAge: 15,
    studentStatus: true
};
// Student 2
const student2: Student = {
    studentID: "TS12345678",
    studentName: "Jasmine Salsabila",
    studentAge: 15,
    studentStatus: true
};
// Student 3
const student3: Student = {
    studentID: "TS23456789",
    studentName: "Futrie Wiedodo",
    studentAge: 16,
    studentStatus: true
};

// Show student data
console.log("=== Student Data ===")
console.log({
    student1,
    student2, 
    student3
});
