const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');



const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String
})
userSchema.plugin(mongoose_delete); // set deleted for an object was deleted, if deleted equals false, it's several

const User = mongoose.model("user", userSchema);
// const cat = new Kitten({ name: 'Hoidanit task' });
// cat.save();

module.exports = User;
