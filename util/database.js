const mysql = require('mysql2');

const pool = mysql.createPool({
    multipleStatements: true,
    connectionLimit: 10,
    password: '',
    user: 'root',
    database: 'supply_chain_mgnt',
    host: 'localhost',
    port: '3308'
});

pool.getConnection((err, connection) =>{
    if (err) {
        console.log('Error connectiong to database');
    }
    if (connection) {
        connection.release();
    }
    return;
});

module.exports = pool.promise();