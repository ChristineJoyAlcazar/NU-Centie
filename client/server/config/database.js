const util = require("util");
const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,

  host: "localhost",
  user: "root",
  password: "Admin@123",
  database: "centie",
});

pool.query = util.promisify(pool.query);
module.exports = pool;
