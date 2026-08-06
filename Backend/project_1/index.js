const express = require('express')
const path = require('path')
const app = express()
const fs = require('fs')

//Parsers
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname,'public')))


app.get("/", (req, res) => {
    fs.readdir("./files", (err, files) => {
        if (err) return res.send("Error reading files");

        const tasks = [];

        files.forEach((file) => {
            const details = fs.readFileSync(`./files/${file}`, "utf-8");

            tasks.push({
                title: file.replace(".txt", ""),
                details: details
            });
        });

        res.render("index", { tasks });
    });
});
app.post("/create", (req, res) => {
    const { title, details } = req.body;

    fs.writeFile(`./files/${title}.txt`, details, (err) => {
        if (err) {
            return res.send("Something went wrong!");
        }

        res.redirect("/");
    });
});
app.get("/files/:filename", (req, res) => {
    const { filename } = req.params;

    fs.readFile(`./files/${filename}`, "utf-8", (err, data) => {
        if (err) {
            return res.status(404).send("File not found");
        }

        res.render("file", {
            filename,
            details: data
        });
    });
});
app.get("/edit/:filename", (req, res) => {
    const { filename } = req.params;

    fs.readFile(`./files/${filename}`, "utf-8", (err, data) => {
        if (err) {
            return res.send("File not found");
        }

        res.render("edit", {
            filename,
            details: data
        });
    });
});
// app.get('/profile/:username', (req,res) => {
    
//     const {username} = req.params
//     console.log(username)
//     res.send(`Welcome, ${username}`)
// })
// app.get('/profile/:username/:age', (req,res) => {
    
//     const {username} = req.params
//     const {age} = req.params
//     console.log(username)
//     res.send(`Welcome, ${username} of age ${age}`)
// })
app.listen(3000 ,  () => {
    console.log("Server is running")
})