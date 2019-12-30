const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/auth', (req, res, next) => {
    res.send('<h1>This is signin</h1>');
});

module.exports = router;