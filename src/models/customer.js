const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
}, {
    timestamps: true,
    // statics: {
    //     findByHoiDanIt(name) {
    //         return this.find({ name: new RegExp(name, 'i') })
    //     }
    // }
},);

customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' }); // set deleted for an object was deleted, if deleted equals false, it's several

const Customer = mongoose.model("Customer", customerSchema);


module.exports = Customer;
