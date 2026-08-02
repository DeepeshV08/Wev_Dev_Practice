const express = require('express')

const app = express()


// app.get(route , requestHandler){
//     // code
// }


// 1. Way of implementing to implement middlewares
// app.use(function(req,res,next){
//     console.log("middleware chala")
//     next()
// })
// app.use(function(req,res,next){
//     console.log("Middlwar chala ek or baar")
//     next()
// })
app.get('/', (req, res) => {
    res.send("hello world")
})

app.get('/profile', (req, res) => {
    res.send("Champion uska coach")
})

app.get('/about', (req, res) => {
    res.send("About page hai ye")
})

app.use((err,req,res,next) => {
    console.log(err.stack)
    res.status(500).send("Something broke!")
})
app.listen(3000)