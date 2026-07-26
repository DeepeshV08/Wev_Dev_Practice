// ==========================
// JavaScript Operators
// ==========================

let a = 10;
let b = 3;

// ==========================
// 1. Arithmetic Operators
// ==========================
console.log("Arithmetic Operators");
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

// ==========================
// 2. Assignment Operators
// ==========================
let x = 10;

x += 5;
console.log("\nx += 5 :", x);

x -= 2;
console.log("x -= 2 :", x);

x *= 3;
console.log("x *= 3 :", x);

x /= 2;
console.log("x /= 2 :", x);

x %= 4;
console.log("x %= 4 :", x);

// ==========================
// 3. Comparison Operators
// ==========================
console.log("\nComparison Operators");

console.log("10 == '10' :", 10 == "10");
console.log("10 === '10':", 10 === "10");
console.log("10 != 5 :", 10 != 5);
console.log("10 !== '10':", 10 !== "10");
console.log("10 > 5 :", 10 > 5);
console.log("10 < 5 :", 10 < 5);
console.log("10 >= 10 :", 10 >= 10);
console.log("10 <= 5 :", 10 <= 5);

// ==========================
// 4. Logical Operators
// ==========================
console.log("\nLogical Operators");

console.log(true && false);
console.log(true || false);
console.log(!true);

// ==========================
// 5. Increment / Decrement
// ==========================
let i = 5;

console.log("\nIncrement / Decrement");

console.log("Pre Increment :", ++i);
console.log("Post Increment:", i++);
console.log("Current Value :", i);

console.log("Pre Decrement :", --i);
console.log("Post Decrement:", i--);
console.log("Current Value :", i);

// ==========================
// 6. Bitwise Operators
// ==========================
console.log("\nBitwise Operators");

console.log("5 & 3 =", 5 & 3);
console.log("5 | 3 =", 5 | 3);
console.log("5 ^ 3 =", 5 ^ 3);
console.log("~5 =", ~5);
console.log("5 << 1 =", 5 << 1);
console.log("5 >> 1 =", 5 >> 1);

// ==========================
// 7. Ternary Operator
// ==========================
let age = 20;

let result = age >= 18 ? "Eligible to Vote" : "Not Eligible";

console.log("\nTernary Operator");
console.log(result);

// ==========================
// 8. Type Operators
// ==========================
console.log("\nType Operators");

console.log(typeof 100);
console.log(typeof "Deepesh");
console.log(typeof true);
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});

let arr = [1, 2, 3];

console.log(arr instanceof Array);
console.log(arr instanceof Object);

// ==========================
// 9. String Operator
// ==========================
console.log("\nString Operator");

let firstName = "Deepesh";
let lastName = "Verma";

console.log(firstName + " " + lastName);

// ==========================
// 10. Nullish Coalescing (??)
// ==========================
console.log("\nNullish Coalescing");

let user = null;
console.log(user ?? "Guest");

// ==========================
// 11. Optional Chaining (?.)
// ==========================
console.log("\nOptional Chaining");

let student = {
    name: "Deepesh",
    address: {
        city: "Bhopal"
    }
};

console.log(student?.name);
console.log(student?.address?.city);
console.log(student?.phone?.number);

// ==========================
// 12. Spread Operator (...)
// ==========================
console.log("\nSpread Operator");

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

console.log(arr2);

// ==========================
// 13. Rest Operator (...)
// ==========================
console.log("\nRest Operator");

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(10, 20, 30, 40));

// ==========================
// 14. Destructuring
// ==========================
console.log("\nDestructuring");

let colors = ["Red", "Green", "Blue"];

let [c1, c2] = colors;

console.log(c1);
console.log(c2);