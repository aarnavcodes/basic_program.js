

// 1. Display name, age, address and college name
console.log("--- 1. Personal Details ---");
const name = "Your Name";
const age = 20;
const address = "Kathmandu, Nepal";
const college = "Your College Name";
console.log("Name   :", name);
console.log("Age    :", age);
console.log("Address:", address);
console.log("College:", college);

// 2. Sum, difference, product and division of two numbers
console.log("\n--- 2. Arithmetic Operations ---");
const a = 20;
const b = 5;
console.log(`Sum        : ${a} + ${b} = ${a + b}`);
console.log(`Difference : ${a} - ${b} = ${a - b}`);
console.log(`Product    : ${a} * ${b} = ${a * b}`);
console.log(`Division   : ${a} / ${b} = ${b !== 0 ? a / b : "Cannot divide by zero"}`);

// 3. Positive, negative or zero
console.log("\n--- 3. Positive / Negative / Zero ---");
const num = -7;
if (num > 0) {
  console.log(`${num} is Positive`);
} else if (num < 0) {
  console.log(`${num} is Negative`);
} else {
  console.log(`${num} is Zero`);
}

// 4. Largest among three numbers
console.log("\n--- 4. Largest of Three Numbers ---");
const x = 12, y = 45, z = 30;
let largest;
if (x >= y && x >= z) {
  largest = x;
} else if (y >= x && y >= z) {
  largest = y;
} else {
  largest = z;
}
console.log(`Largest among ${x}, ${y}, ${z} is ${largest}`);

// 5. Grades based on marks
console.log("\n--- 5. Grade Calculator ---");
const marks = 76;
let grade;
if (marks >= 90) grade = "A";
else if (marks >= 75) grade = "B";
else if (marks >= 60) grade = "C";
else if (marks >= 40) grade = "D";
else grade = "F";
console.log(`Marks: ${marks} -> Grade: ${grade}`);

// 6. Display numbers from 1 to 100
console.log("\n--- 6. Numbers from 1 to 100 ---");
let numbers = [];
for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}
console.log(numbers.join(" "));

// 7. Even numbers between 1 and 50
console.log("\n--- 7. Even Numbers (1 to 50) ---");
let evens = [];
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) evens.push(i);
}
console.log(evens.join(" "));

// 8. Multiplication table of a given number
console.log("\n--- 8. Multiplication Table ---");
const tableOf = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${tableOf} x ${i} = ${tableOf * i}`);
}

// 9. Sum of numbers from 1 to 100
console.log("\n--- 9. Sum of 1 to 100 ---");
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum =", sum); // 5050