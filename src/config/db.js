const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'latihan',
  password: 'mynewpassword',
  port: 5432,
})

module.exports = pool