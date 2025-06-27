const express = require('express');
const mongoose = require('mongoose');

const crudRoutes = require('./routes/crud');

const app = express();
const MONGODBURL = "mongodb://localhost:27017/todolistDB"; // 👈 your local MongoDB URL
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(crudRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    res.status(error.statusCode || 500).json({
        message: error.message,
        data: error.data
    });
});

mongoose.connect(MONGODBURL)
    .then(result => {        
        app.listen(8080, () => {
            console.log("Server is running on http://localhost:8080");
            console.log("Connected to MongoDB on mongodb://localhost:27017/todolistDB");
        });
    })
    .catch(error => {
        console.log(error);
    });
