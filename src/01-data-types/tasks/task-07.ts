/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

// Type definition
type Registration = {
    studentID: string;
    studentName: string;
    gradeLevel: number;
    courseID: string;
    courseTitle: string;
    instructorName: string;
    totalLearningHours: number;
    registrationDate: string;
    isPayment: boolean;
}

// Registration 1
const registration1: Registration = {
    studentID: "CRSNP11",
    studentName: "Nadia Putri",
    gradeLevel: 5,
    courseID: "PHP123",
    courseTitle: "PHP Advance",
    instructorName: "James Ward",
    totalLearningHours: 40,
    registrationDate: "2026-07-27",
    isPayment: false
};
// Registration 2
const registration2: Registration = {
    studentID: "CRSJS62",
    studentName: "Jasmine Salsabila",
    gradeLevel: 1,
    courseID: "PYT099",
    courseTitle: "Python Basic",
    instructorName: "Isaac Newton",
    totalLearningHours: 36,
    registrationDate: "2026-07-10",
    isPayment: false
};
// Registration 3
const registration3: Registration = {
    studentID: "CRSFW00",
    studentName: "Futrie Wiedodo",
    gradeLevel: 10,
    courseID: "MAC004",
    courseTitle: "Machine Learning",
    instructorName: "Thomas Edward",
    totalLearningHours: 24,
    registrationDate: "2026-07-26",
    isPayment: true
};

// Show product data
console.log("=== Registration Data ===")
console.log({
    registration1,
    registration2, 
    registration3
});
