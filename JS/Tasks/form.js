let form = document.querySelector('form')
let email = document.querySelector('#email')

let password = document.querySelector('password')

form.addEventListener('submit',(dets) => {
    dets.preventDefault()
    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    let emailans = emailRegex.test(email.value)
    let passwordans = passwordRegex.test(password.value)

    if(emailans){
        document.querySelector('#emailError').textContent = "Email is incorrect"
        document.querySelector('.error').style.display = 'initial'
    }
    if(passwordans){
        document.querySelector('#passwordError').textContent = "password is incorrect"
    }
})