const Customer = require('../models/customer');

module.exports = {
    createCustomerService: async (customerData) => {
        try {
            let result = await Customer.create({
                name: customerData.name,
                address: customerData.address,
                phone: customerData.phone,
                email: customerData.email,
                description: customerData.description,
                image: customerData.image
            });
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    },
    createArrayCustomerService: async (arr) => {
        try {
            let result = await Customer.insertMany(arr);
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    },
    getAllCustomersService: async (req, res) => {
        try {
            let result = await Customer.find({}).exec();
            console.log("Get all customers are: ", result);

            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    },
    putUpdateCustomerService: async (id, name, address, phone, email, description) => {
        try {
            let result = await Customer.updateOne({ _id: id }, { name, address, phone, email, description });
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    },
    deleteCustomerService: async (id) => {
        try {
            let result = await Customer.deleteOne({ _id: id });
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}