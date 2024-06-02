const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-training",
  password: "mhrdd5610",
});

module.exports = pool.promise();
