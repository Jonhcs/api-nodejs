mysql = require('mysql');
connectionString = 'mysql://root:info@1234@localhost/cms';

db = {};
db.cnn = {};
db.cnn.exec = (query, callback) => {
    var connection = mysql.createConnection(connectionString);
    connection.query(query, (err, rows) => {
        callback(rows, err);
        connection.end;
    });
};

module.exports = db;