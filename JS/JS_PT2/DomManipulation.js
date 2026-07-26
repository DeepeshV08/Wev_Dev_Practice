// select element from html
// let h1 = document.querySelector('h1')

//this is how to change html with using js
// h1.innerHTML = '<i>hello Bro</i>'
// h1.innerText = "hello bhai sahab"
// h1.textContent = "hello sir ji kaise ho"


// How to set an attributes
// let img = document.querySelector('img')
// img.setAttribute('src',"https://images.unsplash.com/photo-1783990901858-59d849c532d6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8")

// let a = document.querySelector('a')
// console.log(a.getAttribute('href'))
// a.removeAttribute('href')
// console.log(a.getAttribute('href'))


//how to create element
// let body = document.querySelector('body')
// let h1 = document.createElement('h1')
// h1.innerText="hello sir kaise ho"
// body.appendChild(h1)

// var div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.background = "red";
// div.style.color = "white";
// div.innerHTML = "Hello";

// body.appendChild(div)

//append last me add karta hai or prepend start me add karta hai
// let h1 = document.createElement('h1')
// h1.innerText ="Helllo me bahar se aaya hu"
// document.querySelector('body').prepend(h1)


// styles update karne hai
// let h1 = document.createElement('h1')
// h1.innerText="hello sir jiii"
// document.querySelector('body').append(h1)
// h1.style.color='red'
// h1.style.backgroundColor= 'black'
// h1.style.width ='100%'
// h1.style.height = '100%'

// h1.classList.add('font')
// console.dir(h1)


//Events and Events handling 
// browser me koi bhi harkat karo event raise ho jayega 

// let h1 = document.createElement('h1')
// h1.innerText = "Hello bhai kaise ho"
// document.querySelector('body').append(h1)

// h1.addEventListener('dblclick',() => {
//     h1.style.color = 'red'
// })


// document.addEventListener('keydown', (event) => {
//     console.log(event.key)
// })

// let input = document.querySelector('input')

// input.addEventListener('input',(event) => {
//    if(event.data != null)  console.log(event.data)
// })

// var div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.background = "red";
// div.style.color = "white";
// div.innerHTML = "Hello";

// document.querySelector('body').append(div)

// div.addEventListener('mouseenter', () => {
//     div.style.backgroundColor = 'green'
// })
// div.addEventListener('mouseleave', () => {
//     div.style.backgroundColor = 'red'
// })


// let sel = document.querySelector('select')
// let dvc = document.querySelector('#device')
// sel.addEventListener('change',(dets)=>{
//     dvc.textContent = `${dets.target.value} Device selected`
// })




// setTimeout and setIntervals

// setTimeout

// setTimeout(()=>{
//     console.log("hellooo")
// },5000)


// let count = 10;


// setInterval
// let interval = setInterval(() => {
//     if(count >= 1){
//         console.log(count)
//         count--; 
//     }else{
//         console.log("counter finished")
//         clearInterval(interval)
//     }
// },1000)




// localStorage

// localStorage.setItem('name', "Deepesh")

// console.log(localStorage.getItem('name'))

// localStorage.setItem('name',"Deepika")
// console.log(localStorage.getItem('name'))

// localStorage.removeItem('name')
// console.log(localStorage.getItem('name'))
// localStorage.clear()

// Session Storage
// sessionStorage.setItem('name' , "Deepesh")

// console.log(sessionStorage.getItem('name'))

// sessionStorage.removeItem('name')
// console.log(sessionStorage.getItem('name'))

// sessionStorage.clear()

// cookies

