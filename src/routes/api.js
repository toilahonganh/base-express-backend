const express = require('express');
const routerAPIs = express.Router();
const { getUsersAPI, postCreateNewUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFile, postUploadMutipleFilesAPI } = require('../controllers/apiController');
const { postCreateCustomer, postCreateArrayCustomer, getAllCustomers, putUpdateCustomer, deleteCustomer, deleteArrayCustomer } = require('../controllers/customerController');
const app = express();

routerAPIs.get('/users', getUsersAPI);
routerAPIs.post('/users', postCreateNewUserAPI);
routerAPIs.put('/users', putUpdateUserAPI);
routerAPIs.delete('/users', deleteUserAPI);

routerAPIs.post('/file', postUploadSingleFile);
routerAPIs.post('/files', postUploadMutipleFilesAPI);

routerAPIs.post('/customers', postCreateCustomer);
routerAPIs.post('/customers-many', postCreateArrayCustomer);
routerAPIs.get('/customers', getAllCustomers);
routerAPIs.put('/customers', putUpdateCustomer);
routerAPIs.delete('/customers', deleteCustomer);
routerAPIs.delete('/customers-many', deleteArrayCustomer);
routerAPIs.get('/info', (req, res) => {
    console.log("check querry", req.query);
    return res.status(200).json({
        data: req.query
    })
});

routerAPIs.get('/info/:name/:address', (req, res) => {
    console.log("check querry", req.params);
    return res.status(200).json({
        params: req.params
    })
});
















module.exports = routerAPIs;
