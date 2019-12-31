const db = require('../util/database');

module.exports = class Worker {

    static findOne(field, value) {
        return db.query('SELECT * FROM person NATURAL JOIN users WHERE ?? = ?;', [field, value]);
    }

    static findByID(username) {
        return db.execute('SELECT * FROM person NATURAL JOIN worker WHERE nic = ?;', [username]);
    }

    static test() {
        return db.query('SELECT * FROM ??; SELECT * FROM ??;', ['users', 'worker']);
    }

    static saveDriver(NIC, firstName, lastName, no, streetName, city, username, password, contactNo) {
        return db.query('CALL saveRetailer(?, ?, ?, ?, ?, ?, ?, ?, ?);',[NIC, firstName, lastName, city, streetName, no, username, password, contactNo]);
    }

    static saveAssistant(NIC, firstName, lastName, no, streetName, city, username, password, contactNo) {
        return db.query('CALL saveWholeSeller(?, ?, ?, ?, ?, ?, ?, ?, ?);',[NIC, firstName, lastName, city, streetName, no, username, password, contactNo]);
    }

    static getWorkingHours(NIC) {
        return db.query('SELECT start_time, end_time FROM truck_trip WHERE ?? = ? AND WHERE trip_date BETWEEN ? AND ?;',[NIC, firstName, lastName, city, streetName, no, username, password, contactNo]);
    }

    static getWorker(type, city) {
        return db.query('SELECT NIC_no, first_name, last_name, store_city.location FROM person NATURAL JOIN worker NATURAL JOIN store_city');
    }

    static getWorkerType(id) {
        return db.query('SELECT workerType(?);',[id]);
    }
}