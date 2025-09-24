const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    password: 'ambachew1234',
    database: 'webproject',
    port: '5432',
    host: 'localhost',
});
pool.connect()
    .then(() => console.log('Connected to PostgreSQL database!'))
    .catch((err) => console.error('Error connecting to the database:', err));

module.exports = pool;