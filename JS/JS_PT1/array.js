// ===========================
// JavaScript Array Methods
// ===========================

let arr = [10, 20, 30, 40, 50];

console.log("Original Array:", arr);

// 1. push() - Add element at end
arr.push(60);
console.log("push():", arr); // [10,20,30,40,50,60]

// 2. pop() - Remove last element
arr.pop();
console.log("pop():", arr); // [10,20,30,40,50]

// 3. unshift() - Add element at beginning
arr.unshift(5);
console.log("unshift():", arr); // [5,10,20,30,40,50]

// 4. shift() - Remove first element
arr.shift();
console.log("shift():", arr); // [10,20,30,40,50]

// 5. concat() - Merge arrays
let arr2 = [60, 70];
console.log("concat():", arr.concat(arr2)); // [10,20,30,40,50,60,70]

// 6. includes() - Check element exists
console.log("includes(30):", arr.includes(30)); // true

// 7. indexOf() - First index of element
console.log("indexOf(40):", arr.indexOf(40)); // 3

// 8. lastIndexOf() - Last index
console.log("lastIndexOf(20):", [10,20,30,20].lastIndexOf(20)); // 3

// 9. reverse() - Reverse array
console.log("reverse():", [...arr].reverse()); // [50,40,30,20,10]

// 10. sort() - Sort ascending
console.log("sort():", [4,2,8,1].sort((a,b)=>a-b)); // [1,2,4,8]

// 11. slice() - Copy part of array
console.log("slice(1,4):", arr.slice(1,4)); // [20,30,40]

// 12. splice() - Add/Remove elements
let spliceArr = [...arr];
spliceArr.splice(2,1,100);
console.log("splice():", spliceArr); // [10,20,100,40,50]

// 13. join() - Convert array to string
console.log("join('-'):", arr.join("-")); // 10-20-30-40-50

// 14. toString()
console.log("toString():", arr.toString()); // 10,20,30,40,50

// 15. forEach() - Loop through array
console.log("forEach():");
arr.forEach(num => console.log(num));

// 16. map() - Create new array
let doubled = arr.map(num => num * 2);
console.log("map():", doubled); // [20,40,60,80,100]

// 17. filter() - Filter values
let even = arr.filter(num => num % 20 == 0);
console.log("filter():", even); // [20,40]

// 18. reduce() - Sum of elements
let sum = arr.reduce((total, num) => total + num, 0);
console.log("reduce():", sum); // 150

// 19. find() - First matching element
console.log("find():", arr.find(num => num > 25)); // 30

// 20. findIndex()
console.log("findIndex():", arr.findIndex(num => num > 25)); // 2

// 21. some() - At least one matches
console.log("some():", arr.some(num => num > 45)); // true

// 22. every() - All match
console.log("every():", arr.every(num => num > 5)); // true

// 23. flat() - Flatten nested array
console.log("flat():", [1,[2,[3,4]]].flat(2)); // [1,2,3,4]

// 24. flatMap()
console.log("flatMap():", [1,2,3].flatMap(x => [x,x*2]));
// [1,2,2,4,3,6]

// 25. fill()
let fillArr = [1,2,3,4];
fillArr.fill(0);
console.log("fill():", fillArr); // [0,0,0,0]

// 26. copyWithin()
let copyArr = [1,2,3,4,5];
copyArr.copyWithin(1,3);
console.log("copyWithin():", copyArr); // [1,4,5,4,5]

// 27. Array.from()
console.log("Array.from():", Array.from("Java"));
// ['J','a','v','a']

// 28. Array.isArray()
console.log("Array.isArray():", Array.isArray(arr)); // true

// 29. keys()
console.log("keys():");
for (let key of arr.keys()) {
    console.log(key);
}

// 30. values()
console.log("values():");
for (let value of arr.values()) {
    console.log(value);
}

// 31. entries()
console.log("entries():");
for (let [index, value] of arr.entries()) {
    console.log(index, value);
}

// 32. at()
console.log("at(-1):", arr.at(-1)); // 50

// 33. Spread Operator (...)
let newArr = [...arr, 60, 70];
console.log("Spread:", newArr);

// 34. Rest Operator (...)
function add(...numbers){
    return numbers.reduce((a,b)=>a+b,0);
}
console.log("Rest:", add(10,20,30)); // 60

// 35. Destructuring
let [first, second] = arr;
console.log("Destructuring:", first, second); // 10 20

// 36. toReversed() (ES2023)
console.log("toReversed():", arr.toReversed());

// 37. toSorted() (ES2023)
console.log("toSorted():", [5,1,4,2].toSorted((a,b)=>a-b));

// 38. toSpliced() (ES2023)
console.log("toSpliced():", arr.toSpliced(2,1,999));

// 39. with() (ES2023)
console.log("with():", arr.with(1,200));