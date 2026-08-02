const { urlencoded } = require('body-parser')
const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', function(req,res){
    res.send("hello world")
})

app.get('/about', function(req,res){
    res.send("about page")
})

app.listen(3000)