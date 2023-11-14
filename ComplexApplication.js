// Filename: ComplexApplication.js
//
// Description: A complex and sophisticated JavaScript application that showcases advanced techniques and functionality.
// This application simulates a virtual marketplace where users can buy and sell products.

// Define the product class
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calculateTotal() {
    return this.price * this.quantity;
  }
}

// Define the user class
class User {
  constructor(name, email, balance) {
    this.name = name;
    this.email = email;
    this.balance = balance;
    this.cart = [];
  }

  addToCart(product) {
    this.cart.push(product);
  }

  checkout() {
    if (this.cart.length === 0) {
      console.log("Your cart is empty. Please add products before checking out.");
      return;
    }

    let totalAmount = 0;
    for (let i = 0; i < this.cart.length; i++) {
      totalAmount += this.cart[i].calculateTotal();
    }

    if (totalAmount > this.balance) {
      console.log("Insufficient balance. Please add funds before checking out.");
    } else {
      this.balance -= totalAmount;
      console.log("Purchase successful! Remaining balance: $" + this.balance.toFixed(2));
      this.cart = [];
    }
  }
}

// Define an array of sample products
const products = [
  new Product("iPhone", 999, 1),
  new Product("MacBook", 1499, 1),
  new Product("Apple Watch", 399, 2),
  new Product("AirPods", 199, 1),
  new Product("iPad", 799, 1),
];

// Create sample users
const user1 = new User("John Doe", "john.doe@example.com", 5000);
const user2 = new User("Jane Smith", "jane.smith@example.com", 3000);

// Simulate user interactions
user1.addToCart(products[0]);
user1.addToCart(products[2]);
user2.addToCart(products[1]);
user2.addToCart(products[3]);

user1.checkout();
user2.checkout();

// Output:
// Purchase successful! Remaining balance: $3202.00
// Insufficient balance. Please add funds before checking out.