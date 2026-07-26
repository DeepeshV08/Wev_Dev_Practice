let btn = document.querySelector("#btn")

let inp = document.querySelector('input')

btn.addEventListener('click',() => {
    inp.click()
})
inp.addEventListener('change',(dets)=>{
    if(dets.target.files){
        btn.textContent = dets.target.files[0].name
    }
})