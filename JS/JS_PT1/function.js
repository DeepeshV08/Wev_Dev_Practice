// what why how
// what function


//  agar code likh diya to wo turant chal jaata hai

//Function - declaration
// function lelo(){
//     console.log("helloo")
// }
// lelo()


// Function Expession
// let fnc = function(){
//     console.log("function expression")
// }
// fnc()

// FAT - Arrow Function
// let fnc2 = () => {
//     console.log("Fat arrow function")
// }
// fnc2()


// function print(val){
//     console.log(val ,`nach rha hai`)
// }
// print("Deepesh")


// add two number
// function add(a, b){ // perimeter
//     console.log(a+b)
// }
// add(5,10)  // arguments


// Default rest and spread parameter
//default perimeter
// function add(v1=0 , v2=0){
//     console.log(v1,v2)
// }
// add(5)

//rest perimeter
// function add(a,b,...c){
//     console.log(a,b,c)
// }
// add(5,3,4,5,5,4,5)

// spread perimeter
// we will learn later

// // return matlb jaha se aaya ho wahi daal do
// function abcd(){
//     return 12;
// }
// console.log(abcd())



// First Class Function -> jinko value ki tarah treat kiya ja sake

// function abcd(val){
//     val()
// }
// abcd(function(){
//     console.log("hey")
// })


// HIGHER ORDER FUNCTION - HOF wo function hot hai jo ki return kare function ya fir accept kare ek function apne perimeter mein

// function abcd(val){
//     return function(){
//         console.log("high order function")
//     }
// }
// console.log(abcd())



// Pure vs impure function

// Pure function 
// let val= 0;
// function abcd(){
//     console.log("hey")
// }
// abcd()

// Impure function
// let val = 0
// function abcd(){
//     val++;
// }
// abcd()


// CLOSURES - ek fucntion jo return kare ek aur function or return hone wla functio hmeha use karega parent function ka koi variable

// function abcd(){
//     let a = 1;
//     return function(){
//         console.log(a)
//     }
// }
// console.log(abcd())


// Lexical scoping
// function abcd(){
//     let a = 12;
//     function defg(){
//         let b = 13;
//         function ghij(){
//             let c = 14;
//         }
//     }
// }


// IEEFE

(function(){
    console.log("helloo")
})()