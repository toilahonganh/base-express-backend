const { uploadSingleFile } = require('../services/fileService');
const { createCustomerService } = require('../services/customerService');


module.exports = {
    postCreateCustomer: async (req, res) => {
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
}