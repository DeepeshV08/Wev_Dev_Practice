
// console.log("helloo 1")
// console.log("helloo 2")
// setTimeout(() => {
// console.log("helloo 3")
// console.log("helloo 4")
// },2000)
// console.log("helloo 5")

let count = 1;
let cnt = setInterval(() => {
    if(count <= 10){
        console.log(count)
        count++;
    }else{
        clearInterval(cnt)
    }
},1000)