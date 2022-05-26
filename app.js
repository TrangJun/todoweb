const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const username = "Trang"
const password = "thutranght29071997";
const cluster = "cluster0.nsqam";
const dbname = "todo";
//Middlewares

//Routes
const todoRoute = require('./routes/todo.js');
app.use('/todo', todoRoute );
// app.post('/post',(req, res) =>{
//     res.send('home page');
// })
//connect db
const db = process.env.DB_CONNECTION;
console.log(db);
// mongoose.connect("mongodb+srv://Trang:thutranght29071997@cluster0.nsqam.mongodb.net/todo?retryWrites=true&w=majority",
// {
//     useNewUrlParser: true,
// }, ()=> {
//     console.log("connect to mongodb");
// });

mongoose.connect(process.env.DB_CONNECTION,
{
    useNewUrlParser: true,
}, ()=> {
    console.log("connect to mongodb");
});

//How to we start listening to the server

app.listen(3000);
