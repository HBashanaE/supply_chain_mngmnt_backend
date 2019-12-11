const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: '',
    user: 'root',
    database: 'supply_chain_mgnt',
    host: 'localhost',
    port: '3308'
});

let scmsdb = {};

scmsdb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM driver`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
}

scmsdb.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT driver_or_assistant(?)`, [id], (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

module.exports = pool;