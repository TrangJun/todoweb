const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Routes
const todoRoute = require('./routes/todo.js');
app.use('/todo', todoRoute );
console.log(process.env.DB_CONNECTION)
mongoose.connect(process.env.DB_CONNECTION,
{
    useNewUrlParser: true,
}, ()=> {
    console.log("connect to mongodb");
});

app.listen(3000);
