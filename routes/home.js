const express = require('express');

const homeController = require('../controllers/home');
const authController = require('../controllers/auth');

const router = express.Router();

router.get('/', homeController.welcome);
// router.get('/auth', authController.welcome);


module.exports = router;