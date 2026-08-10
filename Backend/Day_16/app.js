const express = require('express')

const app = express()

const userModel = require('./models/user.js')

app.use(express.json())
app.get('/', (req, res) => {
    res.send('hellooo')
})
app.post('/create', async(req, res)=>{
    const user = await userModel.create({
        username: "Deep",
        age:20,
        email:"test@test.com"
    })
    res.send(user)
})
app.listen(3000)