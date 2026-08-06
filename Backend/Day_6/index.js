const express = require('express')
const path = require('path')
const app = express()

//Parsers
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname,'public')))
app.set('veiw engine', 'ejs')

app.get('/', (req, res) => {
    res.render("index.ejs")
})
app.get('/profile/:username', (req,res) => {
    
    const {username} = req.params
    console.log(username)
    res.send(`Welcome, ${username}`)
})
app.get('/profile/:username/:age', (req,res) => {
    
    const {username} = req.params
    const {age} = req.params
    console.log(username)
    res.send(`Welcome, ${username} of age ${age}`)
})
app.listen(3000 ,  () => {
    console.log("Server is running")
})