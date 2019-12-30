const db = require('../util/database');

module.exports = class Product {

    constructor (productId, password, firstname, lastName) {
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastName = lastName;
    }

    static findOne(field, value) {
        return db.execute('SELECT * FROM user WHERE ? = ?;', [field, value]);
    }

    static findByID(id) {
        return db.execute('SELECT * FROM user WHERE product_id = ?;',[id]);
    }
}