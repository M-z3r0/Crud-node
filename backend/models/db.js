const { Pool } = require('pg');
require('dotenv').config();
const db = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});
db.connect()
    .then(()=>console.log('Conectado ao PostgreSQL!'))
    .catch(err=> console.log("Erro ao conectar no PostgreSQL",err));
module.exports = db;