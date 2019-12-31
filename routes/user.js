const express = require('express');

const { body } = require('express-validator');

const userController = require('../controllers/user');
const User = require('../models/user');

const router = express.Router();

router.post('/test', userController.test);

router.post('/register',
    [
        body('username')
            .trim()
            .isLength({ min: 5 }).withMessage('minimum length is 5')
            .matches(/^([^\d]*)$/).withMessage('Must not contain numbers')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .custom((value, { req }) => {
                return User.findByUsername(value)
                    .then(([row]) => {
                        if (row[0]) {
                            return Promise.reject('Username already exist');
                        }
                    })
            }),
        body('password')
            .trim()
            .isLength({ min: 8 }).withMessage('minimum length is 8')
            .matches(/\d/).withMessage('must contain a number')
            .matches(/[A -Z]/).withMessage('must contain a uppercase letter')
            .matches(/[a -z]/).withMessage('must contain a lowercase letter')
            .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('must contain a special character'),
        body('firstName')
            .trim()
            .matches(/^([^\d]*)$/).withMessage('Must not contain numbers')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .not()
            .isEmpty(),
        body('lastName')
            .trim()
            .matches(/^([^\d]*)$/).withMessage('Must not contain numbers')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .not()
            .isEmpty(),
        body('no')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .trim()
            .not()
            .isEmpty(),
        body('streetName')
            .trim()
            .matches(/[a-zA-Z]/).withMessage('Must contain at least one character')
            .not()
            .isEmpty(),
        body('city')
            .trim()
            .matches(/^([^\d]*)$/).withMessage('Must not contain numbers')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .not()
            .isEmpty(),
        body('contactNo')
            .trim()
            .matches(/\d/).withMessage('must contain a number')
            .matches(/^([^a-zA-Z]*)$/).withMessage('Must not contain letters')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .isLength({ max: 10 }),
        body('nic')
            .trim()
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .isLength({ min: 10 })
    ],
    userController.register);

router.post('/registerWholeSeller',
    [
        body('username')
            .trim()
            .isLength({ min: 5 }).withMessage('minimum length is 5')
            .matches(/^([^\d]*)$/).withMessage('Must not contain numbers')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .custom((value, { req }) => {
                return User.findByUsername(value)
                    .then(([row]) => {
                        if (row[0]) {
                            return Promise.reject('Username already exist');
                        }
                    })
            }),
        body('password')
            .trim()
            .isLength({ min: 8 }).withMessage('minimum length is 8')
            .matches(/\d/).withMessage('must contain a number')
            .matches(/[A -Z]/).withMessage('must contain a uppercase letter')
            .matches(/[a -z]/).withMessage('must contain a lowercase letter')
            .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('must contain a special character'),
        body('firstName')
            .trim()
            .matches(/^([^\d]*)$/).withMessage('Must not contain numbers')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .not()
            .isEmpty(),
        body('lastName')
            .trim()
            .matches(/^([^\d]*)$/).withMessage('Must not contain numbers')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .not()
            .isEmpty(),
        body('no')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .trim()
            .not()
            .isEmpty(),
        body('streetName')
            .trim()
            .matches(/[a-zA-Z]/).withMessage('Must contain at least one character')
            .not()
            .isEmpty(),
        body('city')
            .trim()
            .matches(/^([^\d]*)$/).withMessage('Must not contain numbers')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .not()
            .isEmpty(),
        body('contactNo')
            .trim()
            .matches(/\d/).withMessage('must contain a number')
            .matches(/^([^a-zA-Z]*)$/).withMessage('Must not contain letters')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .isLength({ max: 10 }),
        body('nic')
            .trim()
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .isLength({ min: 10 })
    ],
    userController.registerWholeSeller);

router.post('/registerRetailer',
    [
        body('username')
            .trim()
            .isLength({ min: 5 }).withMessage('minimum length is 5')
            .matches(/^([^\d]*)$/).withMessage('Must not contain numbers')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .custom((value, { req }) => {
                return User.findByUsername(value)
                    .then(([row]) => {
                        if (row[0]) {
                            return Promise.reject('Username already exist');
                        }
                    })
            }),
        body('password')
            .trim()
            .isLength({ min: 8 }).withMessage('minimum length is 8')
            .matches(/\d/).withMessage('must contain a number')
            .matches(/[A -Z]/).withMessage('must contain a uppercase letter')
            .matches(/[a -z]/).withMessage('must contain a lowercase letter')
            .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('must contain a special character'),
        body('firstName')
            .trim()
            .matches(/^([^\d]*)$/).withMessage('Must not contain numbers')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .not()
            .isEmpty(),
        body('lastName')
            .trim()
            .matches(/^([^\d]*)$/).withMessage('Must not contain numbers')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .not()
            .isEmpty(),
        body('no')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .trim()
            .not()
            .isEmpty(),
        body('streetName')
            .trim()
            .matches(/[a-zA-Z]/).withMessage('Must contain at least one character')
            .not()
            .isEmpty(),
        body('city')
            .trim()
            .matches(/^([^\d]*)$/).withMessage('Must not contain numbers')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .not()
            .isEmpty(),
        body('contactNo')
            .trim()
            .matches(/\d/).withMessage('must contain a number')
            .matches(/^([^a-zA-Z]*)$/).withMessage('Must not contain letters')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .isLength({ max: 10 }),
        body('nic')
            .trim()
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .isLength({ min: 10 })
    ],
    userController.registerRetailer);

router.post('/registerEndCustomer',
    [
        body('username')
            .trim()
            .isLength({ min: 5 }).withMessage('minimum length is 5')
            .matches(/^([^\d]*)$/).withMessage('Must not contain numbers')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .custom((value, { req }) => {
                return User.findByUsername(value)
                    .then(([row]) => {
                        if (row[0]) {
                            return Promise.reject('Username already exist');
                        }
                    })
            }),
        body('password')
            .trim()
            .isLength({ min: 8 }).withMessage('minimum length is 8')
            .matches(/\d/).withMessage('must contain a number')
            .matches(/[A -Z]/).withMessage('must contain a uppercase letter')
            .matches(/[a -z]/).withMessage('must contain a lowercase letter')
            .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('must contain a special character'),
        body('firstName')
            .trim()
            .matches(/^([^\d]*)$/).withMessage('Must not contain numbers')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .not()
            .isEmpty(),
        body('lastName')
            .trim()
            .matches(/^([^\d]*)$/).withMessage('Must not contain numbers')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .not()
            .isEmpty(),
        body('no')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .trim()
            .not()
            .isEmpty(),
        body('streetName')
            .trim()
            .matches(/[a-zA-Z]/).withMessage('Must contain at least one character')
            .not()
            .isEmpty(),
        body('city')
            .trim()
            .matches(/^([^\d]*)$/).withMessage('Must not contain numbers')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .not()
            .isEmpty(),
        body('contactNo')
            .trim()
            .matches(/\d/).withMessage('must contain a number')
            .matches(/^([^a-zA-Z]*)$/).withMessage('Must not contain letters')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .isLength({ max: 10 }),
        body('nic')
            .trim()
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .isLength({ min: 10 })
    ],
    userController.registerEndCustomer);

router.post('/registerStoreKeeper',
    [
        body('username')
            .trim()
            .isLength({ min: 5 }).withMessage('minimum length is 5')
            .matches(/^([^\d]*)$/).withMessage('Must not contain numbers')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .custom((value, { req }) => {
                return User.findByUsername(value)
                    .then(([row]) => {
                        if (row[0]) {
                            return Promise.reject('Username already exist');
                        }
                    })
            }),
        body('password')
            .trim()
            .isLength({ min: 8 }).withMessage('minimum length is 8')
            .matches(/\d/).withMessage('must contain a number')
            .matches(/[A -Z]/).withMessage('must contain a uppercase letter')
            .matches(/[a -z]/).withMessage('must contain a lowercase letter')
            .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('must contain a special character'),
        body('firstName')
            .trim()
            .matches(/^([^\d]*)$/).withMessage('Must not contain numbers')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .not()
            .isEmpty(),
        body('lastName')
            .trim()
            .matches(/^([^\d]*)$/).withMessage('Must not contain numbers')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .not()
            .isEmpty(),
        body('no')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .trim()
            .not()
            .isEmpty(),
        body('streetName')
            .trim()
            .matches(/[a-zA-Z]/).withMessage('Must contain at least one character')
            .not()
            .isEmpty(),
        body('city')
            .trim()
            .matches(/^([^\d]*)$/).withMessage('Must not contain numbers')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .not()
            .isEmpty(),
        body('contactNo')
            .trim()
            .matches(/\d/).withMessage('must contain a number')
            .matches(/^([^a-zA-Z]*)$/).withMessage('Must not contain letters')
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .isLength({ max: 10 }),
        body('nic')
            .trim()
            .matches(/^([^!@#$%^&*(),.?":{}|<>]*)$/).withMessage('Must not contain special characters')
            .isLength({ min: 10 })
    ],
    userController.registerStoreKeeper);

router.post('/signin', userController.signIn);



module.exports = router;