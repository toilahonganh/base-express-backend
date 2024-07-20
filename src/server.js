require('dotenv').config()
const express = require('express');
const connection = require('./config/database');
const path = require('path');
const fileUpload = require('express-fileupload');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config file upload (midleware)
app.use(fileUpload());
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
        app.listen(port, hostname, () => {
            console.log(`Backend zero app listening on port ${port}`);
        });
    } catch (error) {
        console.log("ERROR CONNECT TO DB", error)
    }
})()

