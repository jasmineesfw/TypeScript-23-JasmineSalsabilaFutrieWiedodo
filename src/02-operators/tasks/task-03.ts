/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

// Primitive types
const employeeName: string = "Dimas";
const basicSalary: number = 5000000;
const overtimeHours: number = 12;
const overtimeRate: number = 50000;

// Calculate
const overtimePay: number = overtimeHours * overtimeRate;
const bonus: number = overtimeHours > 10 ? 300000 : 0;
const finalSalary: number = basicSalary + overtimePay + bonus;

// Show salary report
console.log("=== Employee Salary Report ===");
console.log({
    employeeName,
    overtimePay,
    bonus,
    finalSalary
});