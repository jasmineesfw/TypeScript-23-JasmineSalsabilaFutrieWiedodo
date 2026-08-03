/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

// Primitive types
const mechanicalKeyboardPrice: number = 850000;
const mechanicalKeyboardQuantity: number = 1;
const wirelessMousePrice: number = 275000;
const wirelessMouseQuantity: number = 2;
const monitorStandPrice: number = 420000;
const monitorStandQuantity: number = 1;
const voucherValue: number = 100000;
const premiumMember: boolean = true;
const rewardPointRate: number = 50000;
const vatRate: number = 0.11;

// Calculate product subtotal
const mechanicalKeyboardTotal: number = mechanicalKeyboardPrice * mechanicalKeyboardQuantity;
const wirelessMouseTotal: number = wirelessMousePrice * wirelessMouseQuantity;
const monitorStandTotal: number = monitorStandPrice * monitorStandQuantity;
const productSubtotal: number = mechanicalKeyboardTotal + wirelessMouseTotal + monitorStandTotal;

// Discount
const membershipDiscount: number = premiumMember ? productSubtotal * 0.10 : 0;

// Total after discount
const afterMembershipDiscount: number = productSubtotal - membershipDiscount;

// Voucher deduction
const voucherDeduction: number = afterMembershipDiscount >= voucherValue ? voucherValue : afterMembershipDiscount;

// Payment before tax
const paymentBeforeTax: number = afterMembershipDiscount - voucherDeduction;

// VAT
const vat: number = paymentBeforeTax * vatRate;

// Final payment
const finalPayment: number = paymentBeforeTax + vat;

// Reward points (1 point every Rp50,000)
const rewardPoints: number = Math.floor(paymentBeforeTax / rewardPointRate);

// Free shipping
const freeShipping: boolean = premiumMember || paymentBeforeTax > 1500000;

// Show receipt
console.log("=== Online Marketplace Checkout ===");
console.log({
  productSubtotal,
  membershipDiscount,
  voucherDeduction,
  paymentBeforeTax,
  vat,
  finalPayment,
  rewardPoints,
  freeShipping: freeShipping ? "Yes" : "No",
});