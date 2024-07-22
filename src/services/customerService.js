const Customer = require('../models/customer');
const aqp = require('api-query-params');


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
    getAllCustomersService: async (limit, page, name, queryString) => {
        try {
            let result = null;
            if (limit && page) {
                const { filter } = aqp(queryString);
                delete filter.page;
                console.log("CHECK FILTER", filter);
                let offset = (page - 1) * limit;
                result = await Customer.find(filter).skip(offset).limit(limit).exec();

            } else {
                result = await Customer.find({});

            }
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
            let result = await Customer.deleteById({ _id: id });
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    },
    deleteArrayCustomerService: async (arrIds) => {
        try {
            let result = await Customer.delete({ _id: { $in: arrIds } });
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

}