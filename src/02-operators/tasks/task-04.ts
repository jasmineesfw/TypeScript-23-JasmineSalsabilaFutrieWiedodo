/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

// Primitive types
const mechanicalKeyboardPrice: number = 850000;
const mechanicalKeyboardQuantity: number = 1;
const wirelessMousePrice: number = 275000;
const wirelessMouseQuantity: number = 2;
const mousePadPrice: number = 120000;
const mousePadQuantity: number = 1;
const discountRate: number = 0.10;
const premiumMember: boolean = true;

// Calculate product
const totalMechanicalKeyboardPrice: number = mechanicalKeyboardPrice * mechanicalKeyboardQuantity;
const totalWirelessMousePrice: number = wirelessMousePrice * wirelessMouseQuantity;
const totalMousePadPrice: number = mousePadPrice * mousePadQuantity;

// Calculate subtotal
const subtotal: number = totalMechanicalKeyboardPrice + totalWirelessMousePrice + totalMousePadPrice;

// Calculate total purchased items using increment operator
let totalItems: number = 0;
for (let i = 0; i < mechanicalKeyboardQuantity; i++) totalItems++;
for (let i = 0; i < wirelessMouseQuantity; i++) totalItems++;
for (let i = 0; i < mousePadQuantity; i++) totalItems++;

// Calculate discount
const discount: number = subtotal > 1000000 ? subtotal * discountRate : 0;

// Calculate shipping cost
const shippingCost: number = premiumMember ? 0 : 20000;

// Calculate final price
const finalPrice: number = subtotal - discount + shippingCost;

// Show receipt
console.log("=== Online Store ===");
console.log({
    totalMechanicalKeyboardPrice,
    totalWirelessMousePrice, 
    totalMousePadPrice,
    subtotal, 
    totalItems,
    discount,
    shippingCost,
    finalPrice
});