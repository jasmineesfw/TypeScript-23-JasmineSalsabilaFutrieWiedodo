/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

// Type definition
type Attendance = {
    employeeID: string;
    employeeName: string;
    date: string;
    inTime: string;
    outTime: string;
    totalWorkingHours: number;
    isPresent: boolean;
}

// Employee 1
const attendance1: Attendance = {
    employeeID: "ID12345",
    employeeName: "Arya Hakim",
    date: "2026-07-27",
    inTime: "07:00",
    outTime: "15:00",
    totalWorkingHours: 8,
    isPresent: true
};
// Employee 2
const attendance2: Attendance = {
    employeeID: "ID88001",
    employeeName: "Eka Sari",
    date: "2026-07-27",
    inTime: "10:00",
    outTime: "20:00",
    totalWorkingHours: 10,
    isPresent: true
};
// Employee 3
const attendance3: Attendance = {
    employeeID: "ID64801",
    employeeName: "Assa Budi",
    date: "2026-07-27",
    inTime: "08:00",
    outTime: "15:00",
    totalWorkingHours: 7,
    isPresent: true
};

// Show employee data
console.log("=== Attendance Data ===")
console.log({
    attendance1,
    attendance2, 
    attendance3
});