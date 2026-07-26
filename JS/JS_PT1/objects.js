// ===============================
// JavaScript Objects
// ===============================

// Creating an Object
let student = {
    name: "Deepesh",
    age: 21,
    city: "Bhopal",
    course: "CSE",
    marks: 90,

    greet: function () {
        return "Hello " + this.name;
    }
};

console.log("Original Object:", student);

// ===============================
// Accessing Object Properties
// ===============================

// 1. Dot Notation
console.log("Name:", student.name);

// 2. Bracket Notation
console.log("Age:", student["age"]);

// Dynamic Key
let key = "city";
console.log("City:", student[key]);

// Access Function
console.log(student.greet());

// ===============================
// Add New Property
// ===============================
student.email = "deepesh@gmail.com";
console.log("Add Property:", student);

// ===============================
// Update Property
// ===============================
student.age = 22;
console.log("Updated Age:", student);

// ===============================
// Delete Property
// ===============================
delete student.course;
console.log("Delete Property:", student);

// ===============================
// Object.keys()
// Returns all keys
// ===============================
console.log("Keys:", Object.keys(student));

// ===============================
// Object.values()
// Returns all values
// ===============================
console.log("Values:", Object.values(student));

// ===============================
// Object.entries()
// Returns key-value pairs
// ===============================
console.log("Entries:", Object.entries(student));

// ===============================
// Object.fromEntries()
// Array -> Object
// ===============================
let obj = Object.fromEntries([
    ["id",101],
    ["name","Rahul"]
]);

console.log("fromEntries:", obj);

// ===============================
// hasOwnProperty()
// ===============================
console.log(student.hasOwnProperty("name"));
console.log(student.hasOwnProperty("salary"));

// ===============================
// Object.assign()
// Copy/Merge Objects
// ===============================
let obj1 = {a:1,b:2};
let obj2 = {c:3,d:4};

let merged = Object.assign({},obj1,obj2);

console.log("assign():", merged);

// ===============================
// Spread Operator (...)
// ===============================
let copy = {...student};

console.log("Spread Copy:", copy);

// Merge
let merge2 = {...obj1,...obj2};

console.log("Spread Merge:", merge2);

// ===============================
// Object.freeze()
// Cannot Add/Delete/Modify
// ===============================
let person = {
    name:"John"
};

Object.freeze(person);

person.name="Peter";

console.log("freeze():",person);

// ===============================
// Object.seal()
// Modify Allowed
// Add/Delete Not Allowed
// ===============================
let emp={
    id:1,
    name:"Sam"
};

Object.seal(emp);

emp.name="Tom";

console.log("seal():",emp);

// ===============================
// Object.isFrozen()
// ===============================
console.log(Object.isFrozen(person));

// ===============================
// Object.isSealed()
// ===============================
console.log(Object.isSealed(emp));

// ===============================
// Object.create()
// ===============================
let parent={
    country:"India"
};

let child=Object.create(parent);

child.name="Deepesh";

console.log(child.name);
console.log(child.country);

// ===============================
// Object.getOwnPropertyNames()
// ===============================
console.log(Object.getOwnPropertyNames(student));

// ===============================
// Object.hasOwn() (ES2022)
// ===============================
console.log(Object.hasOwn(student,"name"));

// ===============================
// for...in Loop
// ===============================
console.log("for...in");

for(let key in student){
    console.log(key,":",student[key]);
}

// ===============================
// Destructuring
// ===============================
let {name,age,city}=student;

console.log(name);
console.log(age);
console.log(city);

// ===============================
// Optional Chaining
// ===============================
console.log(student.address?.street);

// ===============================
// Nested Objects
// ===============================
let company={
    employee:{
        name:"Deepesh",
        address:{
            city:"Bhopal"
        }
    }
};

console.log(company.employee.name);
console.log(company.employee.address.city);

// ===============================
// JSON Conversion
// ===============================
let json=JSON.stringify(student);

console.log(json);

let object=JSON.parse(json);

console.log(object);

// ===============================
// typeof
// ===============================
console.log(typeof student);

// ===============================
// instanceof
// ===============================
console.log(student instanceof Object);