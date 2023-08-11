require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const app = express();

mongoose.connect("mongodb+srv://maxichanj:WHyj0hSP2zQYqNXK@cluster0.ghnuxn3.mongodb.net/?retryWrites=true&w=majority");

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("MongoDB is connected")
});

app.route("/").get((req,res)=>{
        res.json("Server Is Connected")

});




app.listen(port, "0.0.0.0", ()=>{
    console.log("Welcome, server is running at port:", port);
})
