const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', async(req, res, next) => {
    try {
        let results = await db.all();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// router.get('/:id', async(req, res, next) => {
//     try {
//         let results = await db.one(req.params.id);
//         res.json(results);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// });
handldb = (err, conn) => {
    if(err) {
        console.log()
    }
}
router.get('/doa/:id', async(req, res, next) => {
    try {
        let results = await db.one(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/admin/:id', async(req, res, next) => {
    try {
        let results = await db.one(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/test/:id', (req, res, next) => {
    try {
        let sql = `SELECT * FROM worker WHERE worker_id = ?`;
        db.pool.query(sql, [req.params.id], (err, result) => {
            res.send(result);
        });
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;