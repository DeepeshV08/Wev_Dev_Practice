const express = require('express')
const userModel = require('./userModel.js')

const app = express()

app.get('/', (req, res) => {
    res.send('hey')
})

app.get('/create', async(req, res) => {
    const user = await userModel.create({
        name: "Deepesh",
        username: "deepesh",
        email: "test@test.com"
    })
    res.send(user)
})
app.get('/update', async(req, res)=>{
    
   const update = await userModel.findOneAndUpdate({username : "deepesh"} , {name: "Deepesh verma"})
   res.send(update)
})
app.get('/read',async (req,res) => {
    const users = await userModel.find()
    res.send(users)
})
app.get('/update', async(req, res)=>{
    
   let user = await userModel.findOneAndDelete({username : "deepesh"} , {name: "Deepesh verma"})
   res.send(user)
})
module.exports = app

