// const { Pool } = require('pg');
require('dotenv').config();
const { Pool } = require('pg');


// const pool = new Pool({
//   host: process.env.PGHOST,
//   user: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
//   database: process.env.PGDATABASE,
//   port: process.env.PGPORT,
//   ssl: {
//     rejectUnauthorized: false // set to true for stricter SSL checking
//   }
// });

// pool.connect()
//   .then(() => console.log('✅ PostgreSQL connected successfully!'))
//   .catch((err) => console.error('❌ PostgreSQL connection error:', err));

// module.exports = pool;


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.connect()
  .then(() => console.log('✅ PostgreSQL connected successfully!'))
  .catch((err) => console.error('❌ PostgreSQL connection error:', err));

module.exports = pool;
