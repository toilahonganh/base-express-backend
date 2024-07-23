require('dotenv').config()
const { MongoClient } = require('mongodb');
const express = require('express');
const connection = require('./config/database');
const path = require('path');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config file upload (midleware)
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies
// config template engine
configViewEngine(app);


// route config
app.use('/', webRoutes);
app.use('/v1/api/', apiRoutes);


(async () => {
    try {
        await connection();
        const url = process.env.DB_HOST_WITH_DRIVER;
        const client = new MongoClient(url);

        const dbName = process.env.DB_NAME;

        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('customers');


        app.listen(port, hostname, () => {
            console.log(`Backend zero app listening on port ${port}`);
        });
    } catch (error) {
        console.log("ERROR CONNECT TO DB", error)
    }
})()

