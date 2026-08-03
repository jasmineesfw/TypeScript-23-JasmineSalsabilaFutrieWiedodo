/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

// Primitive types
const chargePerHour: number = 8000;
const hours: number = 7;
const minutes: number = 35;
const discountRate: number = 0.15;

// Calculate playing time
const totalMinutes: number = (hours * 60) + minutes;
const remainingMinutes: number = totalMinutes % 60;

// Calculate billed hours (every started hour)
const billedHours: number = remainingMinutes > 0 ? hours + 1 : hours;

// Calculate payment
const totalPayment: number = billedHours * chargePerHour;
const discount: number = totalMinutes > 300 ? totalPayment * discountRate : 0;
const finalPayment: number = totalPayment - discount;

// Show receipt
console.log("=== Internet Café Receipt ===");
console.log({
    totalMinutes,
    remainingMinutes,
    billedHours,
    totalPayment,
    discount,
    finalPayment
});