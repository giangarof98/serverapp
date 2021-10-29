//MONGO PW B8J75ffkxHhKVLGj
//MONGODB CONNECTION mongodb+srv://Gianmarco:<password>@cluster0.pnxj9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const express = require('express');
const mongoose = require('mongoose');
const stuff = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path')

const app = express();
mongoose.connect("mongodb+srv://Gianmarco:B8J75ffkxHhKVLGj@cluster0.pnxj9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(() => {
        console.log('succesfully conected')
    })
    .catch((e) => {
        console.log('something went wrong');
        console.error(e)
    })

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/stuff', stuff)
app.use('/api/auth', userRoutes)


module.exports = app;