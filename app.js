const http = require('http');
const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./util/database');

const app = express();

const homeRoute = require('./routes/home');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');

const errorController = require('./controllers/error');

// db.execute('SELECT * FROM user')
// .then(result => {
//     console.log(result);
// })
// .catch(err => {
//     console.log(err);
// });

// app.use(cors({credentials: true}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.use(bodyParser.raw);
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((erroe, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message: message, data: data});
})

app.use(homeRoute);
app.use(authRoute);
app.use('/user', userRoute);
// app.use('/product', productRoute);

app.use(errorController.get404);

port = '8080' || process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
