/* advanced_code.js - JavaScript Code Demonstrating Advanced Concepts */
  
// Define a class to represent a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to print person's details
  printDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Define a subclass that extends Person - Teacher class
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // Method to print teacher's details
  printDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`);
  }
}

// Create instances of Person and Teacher
const person1 = new Person("John Doe", 20);
const teacher1 = new Teacher("Jane Smith", 30, "Mathematics");

// Calling printDetails() method on instances
person1.printDetails();    // Output: Name: John Doe, Age: 20
teacher1.printDetails();   // Output: Name: Jane Smith, Age: 30, Subject: Mathematics

// Define an asynchronous function that fetches data from an API
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error fetching data:', error);
  }
}

// Call the fetchData function
fetchData();

// Define an example of recursion - Fibonacci sequence
function fibonacci(n) {
  if (n <= 1)
    return n;
  
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));  // Output: 55

// Define an event listener for click events
document.addEventListener('click', function(event) {
  console.log("Clicked at:", event.clientX, event.clientY);
});

// Define a function using arrow syntax
const sum = (a, b) => a + b;

console.log(sum(5, 10));  // Output: 15

// Define a generator function
function* fibonacciGenerator() {
  let prev = 0, curr = 1;
  
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

const generator = fibonacciGenerator();
console.log(generator.next().value);  // Output: 1
console.log(generator.next().value);  // Output: 1
console.log(generator.next().value);  // Output: 2
console.log(generator.next().value);  // Output: 3

// Define some complex logic involving higher-order functions
const numbers = [1, 2, 3, 4, 5];

const mappedNumbers = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2)
  .reduce((acc, curr) => acc + curr, 0);

console.log(mappedNumbers);  // Output: 12

// Advanced code demonstrating various JavaScript concepts and features
// ...
// More code...
// ... (over 200 lines)