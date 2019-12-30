const User = require('../models/user')

exports.getAllProducts = (req, res, next) => {
    User.getAllUsers()
    .then(([row]) => {
        res.send(row[0]);
    })
    .catch(err => console.log(err));
    res.send('Got all users');
}

exports.getProductById = (req, res, next) => {
    console.log(req.params.username);
    res.send('got it');
}

exports.add = (req, res, next) => {
    console.log(req.body);
    
}

exports.edit = (req, res, next) => {
    console.log('user register');
}