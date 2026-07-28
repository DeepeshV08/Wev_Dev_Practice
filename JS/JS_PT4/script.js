//IEFEE

// let Bank = (function(){
//     let bankBalance = 12000;

//     function checkBalance(){
//         console.log(bankBalance)
//     }

//     function setBalance(val){
//         bankBalance = val;
//     }

//     function withDraw(val){
//         if(val <= bankBalance){
//             bankBalance -= val;
//             console.log(bankBalance)
//         }
//     }

//     return {
//         check : checkBalance,
//         set : setBalance,
//         draw : withDraw
//     }
// })();

// Bank.check()
// Bank.draw(5000)


//  Factory Function 

// function createProduct(name, price){
//     let stock = 10;

//     return {
//         name,
//         price,
//         buy(qty){
//             if(qty <= stock){
//                 stock -= qty
//                 console.log(`${qty} peices booked - ${stock} peices left.`)
//             }else{
//                 console.error(`we have only ${stock} left`)
//             }
//         },
//         refill(qty){
//             stock += qty
//             console.log(`refill product - ${stock} peices now.`)
//         }
//     }
// }
// let iphone = createProduct('iphone', 10000)
// iphone.buy(10)


// class YoutubeChannel{
//     constructor(){
//         this.subscriber = []
//     }

//     subscribe(user){
//         this.subscriber.push(user)
//         user.update(`${user.name} subscrie the channel`)
//     }
//     unsubscribe(user){
//         this.subscriber.filter((sub) =>  sub !== user)
//         user.update(`${user.name} un-subscrie the channel`)
//     }
//     notify(){
//         this.subscriber.forEach((sub) =>  sub.update(message))
//     }
// }

// class User{
//     constructor(name){
//         this.name = name
//     }
//     update(data){
//         console.log(data)
//     }
// }
// let sheryians = new YoutubeChannel()
// let user1 = new User("Deep")
// let user2 = new User("Deepesh")
// sheryians.subscribe(user1)
// sheryians.subscribe(user2)


// Performance Optimization
// Debouncing and throttling

// Debouncing - aap koi action kar rhe ho and aap ye nahi chahte ki action har bar perform ho, hum khud set kar sakte ai ki kitne time bad perform ho

// function debounce(fnc, delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer)
//         timer = setTimeout(function(){
//             fnc(...args)
//         }, delay)
//     }
// }
// document.querySelector('input').addEventListener('input', debounce(function(){
//     console.log("hey")
// },1000)
// )


// Throttling
// function throttle(fnc , delay){
//     let timer=0;
//     return function(...args){
//         let now = Date.now()
//         if(now - timer>= delay){
//             timer = now
//             fnc(...args)
//         }
//     }
// }
// document.querySelector('input').addEventListener('input', throttle(function( ){
//     console.log('hey')
// }, 1000))



