/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

// Type definition
type Product = {
    productID: string;
    productName: string;
    price: number;
    stock: number;
    weight: number;
    averageRating: number;
    isDiscount: boolean;
}

// Product 1
const product1: Product = {
    productID: "PRD001",
    productName: "Wireless Mouse",
    price: 249000,
    stock: 123,
    weight: 0.30,
    averageRating: 4,
    isDiscount: true
};
// Product 2
const product2: Product = {
    productID: "PRD002",
    productName: "Mechanical Keyboard",
    price: 899000,
    stock: 50,
    weight: 1,
    averageRating: 4.3,
    isDiscount: true
};
// Product 3
const product3: Product = {
    productID: "PRD003",
    productName: "USB-C Charger 65W",
    price: 99000,
    stock: 67,
    weight: 0.10,
    averageRating: 4.9,
    isDiscount: true
};

// Show product data
console.log("=== Product Data ===")
console.log({
    product1,
    product2, 
    product3
});
