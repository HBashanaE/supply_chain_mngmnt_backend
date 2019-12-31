const db = require('../util/database');

module.exports = class User {

    constructor(username, password, firstname, lastName) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.streetNumber = streetNumber;
        this.streetName = streetName;
        this.city = city;
    }

    static findOne(field, value) {
        return db.query('SELECT * FROM person NATURAL JOIN users WHERE ?? = ?;', [field, value]);
    }

    static findByUsername(username) {
        return db.execute('SELECT * FROM person NATURAL JOIN users WHERE user_name = ?;', [username]);
    }

    static test() {
        return db.query('SELECT * FROM ??; SELECT * FROM ??;', ['users', 'worker']);
    }

    static saveRetailer(NIC, firstName, lastName, no, streetName, city, username, password, contactNo) {
        return db.query('CALL saveRetailer(?, ?, ?, ?, ?, ?, ?, ?, ?);',[NIC, firstName, lastName, city, streetName, no, username, password, contactNo]);
    }

    static saveWholeseller(NIC, firstName, lastName, no, streetName, city, username, password, contactNo) {
        return db.query('CALL saveWholeSeller(?, ?, ?, ?, ?, ?, ?, ?, ?);',[NIC, firstName, lastName, city, streetName, no, username, password, contactNo]);
    }

    static saveEndCustomer(NIC, firstName, lastName, no, streetName, city, username, password, contactNo) {
        return db.query('CALL saveEndCustomer (?, ?, ?, ?, ?, ?, ?, ?, ?);',[NIC, firstName, lastName, city, streetName, no, username, password, contactNo]);
    }

    static saveStoreKeeper(NIC, firstName, lastName, no, streetName, city, username, password, contactNo, storeID) {
        return db.query('CALL  saveStoreKeeper(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',[NIC, firstName, lastName, city, streetName, no, username, password, contactNo, storeID]);
    }

    static getUserType(username) {
        return db.query('SELECT userType(?);',[username]);
    }
}