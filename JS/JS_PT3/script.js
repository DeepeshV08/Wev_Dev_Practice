// Scope , Executions , Context and Closures

// Scope -> scope hai aap apne created variable and function kaha tak use kar sakte ho
//  line 1 - variale se jaha tak aapne code kar rhe ho waha tak aap variable ko use kar sakta hu

// Function scopre -> only function ke andar hi use ho sakti hai
// global scope -> poore code me kahi bhi use ho sakti hai
// block scope -> {} curly braces main use ho sakti hai`

// agar aapka code kisi {} braces ke andar nhi hai to aapka code global hai

// agar function name(){} function scope

// {} this is block scope


// Executions content -> Js sabse phle jaise hi aapka function dekhta hai sabse phle js bnata hai execution context , ye ek process hai jo ki do different phases me chalta hai , memory phase and doosre ka naam hai execution phase

// function abcd(){
//     var a = 12;
//     var b = 13;
//     var c = 14;
// }

// js - lexical scoping
// dynamic scoping



// Closures -> function hote hai jo ki parent function ke andar ho aur andar wala function return ho rha ho , and returning function use kare , parent function ka koi variable
// fayde -> private variables
// global pollution remove kar skate ho

// function abcd(){
//     let a = 12
//     return function (){
//         console.log(a)
//     }
// }
// abcd()()


// Encapsulation
// function abcd(){

//     let click = 0;
//     return function(){
//         if(click < 5){
//             click++;
//             console.log(click + "value")
//         }
//     }
// }

// let fnc = abcd()
// fnc()
// fnc()
// fnc()
// fnc()
// fnc()


// Question on Closures

// function createToaster(config){
//     return function(notification){
//         let div = document.createElement('div');
//         div.className = `fixed ${config.theme === 'dark' ? "bg-gray-800 text-white": "bg-gray-100 text-white"} px-6 py-3 rounded shadow-lg pointer-events-none
//         ${config.positionX === 'right' ? 'right-10': 'left-10'} ${config.positionY === 'top' ? "top-10 " : "bottom-10"}`
//         div.textContent = notification;
//         document.body.appendChild(div)

//         setTimeout(()=>{
//             document.body.removeChild(div)
//         },config.duration *1000)
//     }
// }

// let toaster = createToaster({
//     positionX : 'left',
//     positionY : 'top',
//     theme : "dark",
//     duration : 3,
// })

// toaster("This is dummy notification")



// function kuchDerBaad(val){
//     setTimeout(()=>{
//         console.log("Hellooooo")
//     },Math.random()*10)
// }

// kuchDerBaad()


// Callback function

// function addressLelo(address,cb){
//     return cb({name : "deepesh"})
// }

// addressLelo("bhoapl",function(val){
//     console.log(val.name);
// })


// function profileLekarAao(username , cb){
//     setTimeout(()=>{
//         return cb(["img1","img2","img3"]);
//     },3000)
// }


// profileLekarAao("deepesh",function(data){
//     console.log(data)
// })


// Promises -> promises aap ek promise bnate ho jo ki 2 state me se 1 state me ja skata hai yaa to resolve hoga ya to reject hoga ye to bakt batyega lekin ghume to 2no ke liye code likhna padta hai

let pr = new Promise(function(res,rej){

    setTimeout(()=>{
        res("harsh")
    },3000)

})

pr.then(function(){
    console.log("accept ho gya")
})
.catch(function(){
    console.log("reject ho gya")
})