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
        return db.query('SELECT * FROM user WHERE ?? = ?;', [field, value]);
    }

    static findByUsername(username) {
        return db.execute('SELECT * FROM user WHERE user_id = ?;', [username]);
    }

    save() {
        return db.query('INESERT INTO users VALUES(?, ?, ?, ?, ?, ?, ?)',
            [this.username, this.password, this.firstName, this.lastName, this.streetNumber, this.streetName, this.city]);
    }

    static test() {
        return db.query('SELECT * FROM ??; SELECT * FROM ??;', ['users', 'worker']);
    }

    static saveRetailer(NIC, firstName, lastName, streetNumber, streetName, city, isActive, username, password) {

        db.beginTransaction((err) => {
            db.query('INESERT INTO person VALUES(?, ?, ?, ?, ?, ?, ?);\
            INESERT INTO users VALUES(?, ?, ?);',
                [NIC, firstName, lastName, city, streetName, streetNumber, isActive], () => {
                    db.commit(() => db.release())
                })
        });
    }
}