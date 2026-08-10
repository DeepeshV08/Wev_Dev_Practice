const express = require('express')
const path = require('path')
const app = express()
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('./models/user.js')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/create', async (req, res) => {
    const {username , email , password ,age} = req.body
    const hash = await bcrypt.hash(password, 10)
    console.log(hash)
    const user = await userModel.create({
        username,
        email,
        password: hash,
        age
    })
    const token = jwt.sign({email} , "kkjewuhfxjhebfuba")
    res.cookie('token', token)
    res.send("user created",token)
})
app.listen(3000)