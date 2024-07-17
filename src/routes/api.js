const express = require('express');
const routerAPIs = express.Router();
const { getUsersAPI, postCreateNewUserAPI, putUpdateUserAPI } = require('../controllers/apiController');
const app = express();

routerAPIs.get('/users', getUsersAPI);
routerAPIs.post('/users', postCreateNewUserAPI);
routerAPIs.put('/users', putUpdateUserAPI);






module.exports = routerAPIs;
