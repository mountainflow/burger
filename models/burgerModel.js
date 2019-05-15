// This is coming from -- connection>orm===========================
const orm = require('../config/orm.js');

var burger = {
    getAllBurgers: function (cb) {
        orm.selectAll('burgers', cb);
    },
    postBurger: function (frntData, cb) {
        orm.insertOne('burgers', 'burger_name', frntData, cb);
    },
    putBurger: function (id, cb) {
        orm.update('burgers', id, cb);
    },
    deleteBurger: function (id, cb) {
        orm.delete('burgers', id, cb);
    }
};

// Exports to burgers_controller.js ===============================
module.exports = burger;