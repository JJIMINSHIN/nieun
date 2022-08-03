const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/User');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://localhost:27017/myapp');

mongoose.connection.on("connected", ()=>{
    console.log('DB connect success');
});

mongoose.connection.on("error", (err)=>{
    console.log(err);
});
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/user', userRouter)

app.listen(3000, ()=>{
    console.log('server open');
});