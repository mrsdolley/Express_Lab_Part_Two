const pg = require("pg");

const pool = new pg.Pool({
user: "postgres",
password: "****",
host: "localhost",
port: 5432,
database: "postgres",
ssl: false
});

module.exports = pool;