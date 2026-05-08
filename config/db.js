const mysql = require('mysql2');
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    // Enable SSL only in production (Aiven/Render)
    ...(isProduction && {
        ssl: {
            rejectUnauthorized: false
        }
    })
});

connection.connect((err) => {

    if (err) {
        console.error("Database connection failed:", err);

    } else {

        console.log("MySQL Connected");

        // Automatically create table if it doesn't exist
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS schools (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                address VARCHAR(500) NOT NULL,
                latitude FLOAT NOT NULL,
                longitude FLOAT NOT NULL
            )
        `;

        connection.query(createTableQuery, (err) => {

            if (err) {
                console.error("Table creation failed:", err);
            } else {
                console.log("Schools table ready");
            }
        });
    }
});

module.exports = connection;