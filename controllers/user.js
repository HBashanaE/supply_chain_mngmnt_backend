const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');

const User = require('../models/user');


exports.test = (req, res, next) => {
    User.test()
    .then(([row]) => {
        console.log(row);
    });
    res.send('ok');
}

exports.signIn = (req, res, next) => {
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;
    let result;

    console.log(username);
    console.log(password);

    User.findByUsername(username)
        .then(([row]) => {
            // console.log(row[0]['user_id']);
            if(row[0]) {
                DBuserID = row[0]['user_id'];
                DBuserName = row[0]['user_id'];
                DBpassword = row[0]['password'];
                DBisActive = row[0]['user_id'];

                if(password === DBpassword){
                    //login
                    //create toke and send to frontend
                    res.send('<h1>This is what I got</h1>');
                } else {
                    console.log('login failed');
                    res.send('login failed');
                }
            } else {
                console.log('No user found');
                res.send('No user found');
            }
        })
        .catch(err => console.log(err));

}

exports.register = (req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        const error = new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    const useranme = req.body.username;
    const firstName = req.body.firstname;
    const lastName = req.body.lastName;
    const password = req.body.password;

    bcrypt.hash()
    .then(hashedPW => {
        user = new User(username, hashedPW, firstName, lastName);
        user.save();
    })
    .catch(err => {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });

    //create database entry

    let created = true;

    if(created == true) {
        res.status(201).json({
            message: "Registerd",
            
        });
    }else {
        res.status(200).json({
            message: "Registration unsuccessful"
        });
    }

}

exports.registerWholeSeller = (req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        const error = new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    const useranme = req.body.username;
    const firstName = req.body.firstname;
    const lastName = req.body.lastName;
    const password = req.body.password;

    bcrypt.hash()
    .then(hashedPW => {
        user = new User(username, hashedPW, firstName, lastName);
        user.save();
    })
    .catch(err => {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });

    // create record in persons table
    // create record in user table
    // create rexord in customer table 
    // create record in wholeseller table

    let created = true;

    if(created == true) {
        res.status(201).json({
            message: "Registerd",
            
        });
    }else {
        res.status(200).json({
            message: "Registration unsuccessful"
        });
    }

}

exports.registerRetailer = (req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        const error = new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    const NIC = req.body.nic;
    const firstName = req.body.firstname;
    const lastName = req.body.lastName;
    const city = req.body.city;
    const streetName = req.body.streetName;
    const streetNumber = req.body.streetNumber;
    const isActive = req.body.isActive;
    const username = req.body.username;
    const password = req.body.password;

    User.saveRetailer(NIC, firstName, lastName, streetNumber, streetName, city, isActive, username, password);

    let created = true;

    if(created == true) {
        res.status(201).json({
            message: "Registerd",
            
        });
    }else {
        res.status(200).json({
            message: "Registration unsuccessful"
        });
    }

}

exports.registerEndCustomer = (req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        const error = new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    const useranme = req.body.username;
    const firstName = req.body.firstname;
    const lastName = req.body.lastName;
    const password = req.body.password;

    bcrypt.hash()
    .then(hashedPW => {
        user = new User(username, hashedPW, firstName, lastName);
        user.save();
    })
    .catch(err => {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });

    // create record in persons table
    // create record in user table
    // create rexord in customer table 
    // create record in endcustomer table

    let created = true;

    if(created == true) {
        res.status(201).json({
            message: "Registerd",
            
        });
    }else {
        res.status(200).json({
            message: "Registration unsuccessful"
        });
    }

}


exports.registerStoreKeeper = (req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        const error = new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    const useranme = req.body.username;
    const firstName = req.body.firstname;
    const lastName = req.body.lastName;
    const password = req.body.password;

    bcrypt.hash()
    .then(hashedPW => {
        user = new User(username, hashedPW, firstName, lastName);
        user.save();
    })
    .catch(err => {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });

    // create record in persons table
    // create record in user table
    // create rexord in storekeeper table

    let created = true;

    if(created == true) {
        res.status(201).json({
            message: "Registerd",
            
        });
    }else {
        res.status(200).json({
            message: "Registration unsuccessful"
        });
    }

}

