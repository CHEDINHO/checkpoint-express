const express = require('express');
const path = require('path');



const app = express();

app.use(express.json());

require("dotenv").config();

const PORT = process.env.PORT;

app.listen(PORT, (err)=>{
    err? console.log(err)
    : console.log(`Server is running on port http://127.0.0.1:${PORT}`)
})

// require the pug 
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));


const checkDate = require("./middlewares/CheckDate");

app.use(checkDate);

app.get("/", (req, res)=>{
    res.render("Home");
})

app.get("/contact", (req, res)=>{
    res.render("contact");
})

app.get("/Services", (req, res)=>{
    res.render("Services");
}) 