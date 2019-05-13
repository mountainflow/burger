const orm = require('../config/orm.js');

var burger = {
    getAllBurgers: function (cb) {
        orm.selectAll('burgers', cb);
    },
    postBurger: function (frntData, cb) {
        orm.insertOne('burgers', 'burger_name', frntData, cb);
    }
};


module.exports = burger;