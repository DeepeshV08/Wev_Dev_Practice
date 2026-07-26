// Primitive Data Types

let number = 25;
let decimal = 99.99;
let str = "Hello, JavaScript!";
let bool = true;
let undef;
let empty = null;
let unique = Symbol("id");
let bigNum = 1234567890123456789012345678901234567890n;

// Non-Primitive Data Types

let array = [10, 20, 30, 40];

let object = {
    name: "Deepesh",
    age: 21,
    city: "Bhopal"
};

function greet() {
    return "Welcome!";
}

// Printing Values and Their Types

console.log("Number:", number, "| Type:", typeof number);
console.log("Decimal:", decimal, "| Type:", typeof decimal);
console.log("String:", str, "| Type:", typeof str);
console.log("Boolean:", bool, "| Type:", typeof bool);
console.log("Undefined:", undef, "| Type:", typeof undef);
console.log("Null:", empty, "| Type:", typeof empty); // object (JavaScript bug)
console.log("Symbol:", unique, "| Type:", typeof unique);
console.log("BigInt:", bigNum, "| Type:", typeof bigNum);

console.log("Array:", array, "| Type:", typeof array);
console.log("Is Array?", Array.isArray(array));

console.log("Object:", object, "| Type:", typeof object);

console.log("Function:", greet(), "| Type:", typeof greet);