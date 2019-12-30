const db = require('../util/database');

module.exports = class Person {

    constructor (nic, firstName, lastName, streetNumber, streetName, city, isActive = 1) {
        this.nic = nic;
        this.firstName = firstName;
        this.lastName = lastName;
        this.streetNumber = streetNumber;
        this.streetName = streetName;
        this.city = city;
        this.isActive = isActive;
    }

    static findOne (field, value) {
        return db.query('SELECT * FROM person WHERE ?? = ?;', [field, value]);
    }

    static findByPersonID(personID) {
        return db.execute('SELECT * FROM person WHERE person_id = ?;',[personID]);
    }

    save() {
        return db.query('INESERT INTO person VALUES(?, ?, ?, ?, ?, ?, ?)', 
        [this.nic, this.firstName, this.lastName, this.city, this.streetNumber, this.streetName, this.streetNumber, this.isActive]);
    }

}