/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

// Primitive types
const previousMeter: number = 25640;
const currentMeter: number = 25892;
const electricityPricePerkWh: number = 1650;
const solarPanelInstalled: boolean = true;
const energySavingMode: boolean = false;

// Calculate
const totalEnergyConsumption: number = currentMeter - previousMeter;
const electricityBill: number = totalEnergyConsumption * electricityPricePerkWh;

// Discount
let discount: number = 0;
if (solarPanelInstalled) {
    discount += 0.20;
}
if (energySavingMode) {
    discount += 0.05
}

// Calculate final bill
const finalBill: number = electricityBill - (electricityBill * discount);

// Check eligibility
const isEligible: boolean = solarPanelInstalled && totalEnergyConsumption < 300 && energySavingMode;

// Show green energy program eligibility
console.log("=== Green Energy Program ===");
console.log({
    totalEnergyConsumption,
    electricityBill,
    finalBill,
    isEligible: isEligible ? "Yes" : "No"
});