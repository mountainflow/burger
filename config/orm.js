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
    }

};


module.exports = orm;