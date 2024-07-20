const express = require('express');
const routerAPIs = express.Router();
const { getUsersAPI, postCreateNewUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFile, postUploadMutipleFilesAPI } = require('../controllers/apiController');
const app = express();

routerAPIs.get('/users', getUsersAPI);
routerAPIs.post('/users', postCreateNewUserAPI);
routerAPIs.put('/users', putUpdateUserAPI);
routerAPIs.delete('/users', deleteUserAPI);

routerAPIs.post('/file', postUploadSingleFile);
routerAPIs.post('/files', postUploadMutipleFilesAPI);









module.exports = routerAPIs;
