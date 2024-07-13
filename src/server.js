require('dotenv').config()
const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// route config
app.use('/', webRoutes);

// connect sql
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, //default: 3306
    user: DB_USER, //default: empty
    password: DB_PASSWORD,
    database: DB_NAME
});

connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log('>>>>', results);
    }
)

app.get('/', (req, res) => {
    res.render('sample.ejs');
});



app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});