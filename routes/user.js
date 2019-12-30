const express = require('express');

const {body} = require('express-validator');

const userController = require('../controllers/user');
const User = require('../models/user');

const router = express.Router();

router.post('/test',userController.test);

router.post('/register', 
[
    body('username')
    .trim()
    .isLength({min: 5})                 
    .custom((value, {req} ) => {
        return User.findByUsername(value)
        .then(([row]) => {
            if(row[0]) {
                return Promise.reject('Username already exist');
            }
        })
    }),
    body('password')
    .trim()
    .isLength({min: 8 }),
    body('firstName')
    .trim()
    .not()
    .isEmpty(),
    body('lastName')
    .trim()
    .not()
    .isEmpty(),
    // body('streetNumber')
    // .trim()
    // .not()
    // .isEmpty(),
    // body('streetName')
    // .trim()
    // .not()
    // .isEmpty(),
    // body('city')
    // .trim()
    // .not()
    // .isEmpty(),
    // body('contactNo')
    // .trim()
    // .isLength({min:10}),
    // body('nic')
    // .trim()
    // .isLength({min:10})
], 
userController.register);

router.post('/registerWholeSeller', 
[
    
], 
userController.registerWholeSeller);

router.post('/registerRetailer', 
// [
    
// ], 
userController.registerRetailer);

router.post('/registerEndCustomer', 
[
    
], 
userController.registerEndCustomer);

router.post('/registerStoreKeeper', 
[
    
], 
userController.registerStoreKeeper);

router.post('/signin', userController.signIn);



module.exports = router;