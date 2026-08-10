const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const bcrypt = require("bcrypt")

app.use(cookieParser())

const hash = bcrypt.hash('deepesh')
console.log(hash)
app.get("/", (req, res) => {
    res.cookie("name","deepesh")
    res.send("done")
})
app.get('/read', (req , res) =>{
    console.log(req.cookies)
})
app.listen(3000)