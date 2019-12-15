const http = require('http');
const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const homeRoute = require('./routes/home');
const authRoute = require('./routes/auth');

app.use(bodyParser.urlencoded({extended: false}));

app.use(homeRoute);
// app.use(authRoute);

app.use((req, res, next) => {
    res.status(404).send('<h1>404 Page Not Found</h1>');
});
port = '3000' || process.env.PORT;
app.listen(port, () => {
    console.log(`Server sarrted on port ${port}`);
})
