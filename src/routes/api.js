const express = require('express');
const routerAPIs = express.Router();
const { getUsersAPI, postCreateNewUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFile } = require('../controllers/apiController');
const app = express();

routerAPIs.get('/users', getUsersAPI);
routerAPIs.post('/users', postCreateNewUserAPI);
routerAPIs.put('/users', putUpdateUserAPI);
routerAPIs.delete('/users', deleteUserAPI);

routerAPIs.post('/file', postUploadSingleFile);








module.exports = routerAPIs;
