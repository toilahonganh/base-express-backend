const { uploadSingleFile } = require('../services/fileService');
const { createCustomerService, createArrayCustomerService, getAllCustomersService, putUpdateCustomerService, deleteCustomerService, deleteArrayCustomerService } = require('../services/customerService');


const postCreateCustomer = async (req, res) => {
    let { name, address, phone, email, image, description } = req.body;
    let imageUrl = "";

    console.log("NAME", name);
    if (!req.files || Object.keys(req.files).length === 0) {
        // return res.status(400).send('No files were uploaded');
    } else {
        let result = await uploadSingleFile(req.files.image);
        imageUrl = result.path;
        console.log("check result>>>", result.path);
    }
    let customerData = {
        name, address, phone, email, description, image: imageUrl
    }
    let customer = await createCustomerService(customerData);

    return res.status(200).json({
        EC: 0,
        data: customer
    })
}
const postCreateArrayCustomer = async (req, res) => {
    console.log("Array Customers: ", req.body.customers);
    let arrCustomer = await createArrayCustomerService(req.body.customers);
    if (arrCustomer) {
        return res.status(200).json({
            EC: 0,
            data: arrCustomer
        })
    } else {
        return res.status(200).json({
            EC: -1,
            data: arrCustomer
        })
    }
}
const getAllCustomers = async (req, res) => {


    let limit = req.query.limit;
    let page = req.query.page;
    let name = req.query.name;
    let allCustomer = null;
    if (limit && page && name) {
        allCustomer = await getAllCustomersService(limit, page, name, req.query);
        // console.log("req.query", req.query)

    } else {
        allCustomer = await getAllCustomersService();
    }
    return res.status(200).json({
        EC: 0,
        data: allCustomer,
    })
}

const putUpdateCustomer = async (req, res) => {
    let { id, name, address, phone, email, description } = req.body;
    let result = await putUpdateCustomerService(id, name, address, phone, email, description);
    return res.status(200).json({
        EC: 0,
        data: result
    })
}
const deleteCustomer = async (req, res) => {
    let id = req.body.id;
    let result = await deleteCustomerService(id);
    return res.status(200).json({
        EC: 0,
        data: result
    })
}

const deleteArrayCustomer = async (req, res) => {
    let ids = req.body.customersId;
    console.log("CHECK IDS", ids);
    let result = await deleteArrayCustomerService(ids);
    return res.status(200).json({
        EC: 0,
        data: result
    })
}

module.exports = {
    postCreateCustomer, postCreateArrayCustomer, getAllCustomers, putUpdateCustomer, deleteCustomer, deleteArrayCustomer
}