require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const userModel = require("./models/user");

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Home Page
app.get("/", (req, res) => {
    res.render("index");
});

// Read All Users
app.get("/read", async (req, res) => {
    const users = await userModel.find();
    res.render("read", { users });
});

// Create User
app.post("/create", async (req, res) => {
    const { name, email, image } = req.body;

    await userModel.create({
        name,
        email,
        image,
    });

    res.redirect("/read");
});

// Delete User
app.get("/delete/:id", async (req, res) => {
    const { id } = req.params;

    await userModel.findByIdAndDelete(id);

    res.redirect("/read");
});

// Edit User
app.get("/edit/:id", async (req, res) => {
    const { id } = req.params;

    const user = await userModel.findById(id);

    res.render("edit", { user });
});

// Update User
app.post("/update/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, image } = req.body;

    await userModel.findByIdAndUpdate(
        id,
        {
            name,
            email,
            image,
        },
        { new: true }
    );

    res.redirect("/read");
});

module.exports = app;