const express = require('express');
const routerAPIs = express.Router();
const { getUsersAPI } = require('../controllers/apiController');
const app = express();

routerAPIs.get('/', (req, res) => {
    res.send("Hello apis");
});
routerAPIs.get('/users', getUsersAPI);




module.exports = routerAPIs;
