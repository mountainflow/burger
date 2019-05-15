const connection = require('./connection.js');

let orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, col, frntData, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col, frntData.burger_name], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    update: function (table, id, cb) {
        var queryString = "UPDATE ?? SET devoured = 1 WHERE id = ?";
        connection.query(queryString, [table, id], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    delete: function () {
        var queryString = "UPDATE ?? (??) VALUES (?)";
        connection.query(queryString, [table, col, frntData.burger_name], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }

};


//exports to burgerModel.js =======================================
module.exports = orm;