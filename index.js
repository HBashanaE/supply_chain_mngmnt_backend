const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');

const db = mysql.createConnection({
    host: 'localhost',
    port: '3308',
    user: 'root',
    password: '',
    database: 'supply_chain_mgnt'
});

db.connect((err) => {
    if (err) {
        console.log('Error connecting database');
    }
    console.log('Connected');
})
const app = express();
app.use(bodyparser.json());

// app.get('/create',(req,res) =>{
//     let sql = 'CREATE TABLE testTable(id int PRIMARY KEY, name varchar(255));';
//     db.query(sql,(err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('table created');
//     });
// });


// get whether driver or an assistant
app.get('/driverorassistant/:id', (req, res) => {
    let sql = `SELECT driver_or_assistant(?);`
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.get('/admin/:id', (req, res) => {
    let sql = `SELECT * FROM company_admin WHERE admin_id = ?;`
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.get('/user', (req, res) => {
    let sql = `SELECT * FROM user;`
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.post('/user', (req, res) => {
    let sql = `INSERT INTO user VALUES (?,?,?,?,?,?,?) ;`;
    user = req.body;
    db.query(sql, [user.A, user.B, user.C, user.D, user.E, user.F, user.G], (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send(result);
        }
    });
});

app.put('/user', (req, res) => {
    let sql = `UPDATE user SET first_name = ?,last_name = ?,city = ?,street = ?,address_number = ? WHERE user_id = ?;`
    user = req.body;
    db.query(sql, [user.fn, user.ln, user.city, user.street, user.addr, user.id], (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send(result);
        }
    });
});

port = '3000' || process.env.PORT;
app.listen(port, () => {
    console.log(`Server sarrted on port ${port}`);
})
