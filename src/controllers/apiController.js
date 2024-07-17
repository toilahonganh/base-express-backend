const User = require('../models/user')

const getUsersAPI = async (req, res) => {
    let results = await User.find({});

    return res.status(200).json({
        errorCode: 0,
        data: results
    })
};

const postCreateNewUserAPI = async (req, res) => {
    let email = req.body.gmail;
    let name = req.body.name;
    let city = req.body.city;

    let user = await User.create({
        email: email,
        name: name,
        city: city
    })

    return res.status(201).json({
        EC: 0,
        data: user
    })

};

const putUpdateUserAPI = async (req, res) => {
    let email = req.body.gmail;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;

    let user = await User.updateOne({ _id: userId }, { email: email, name: name, city: city });
    return res.status(201).json({
        EC: 0,
        data: user
    })
};

module.exports = {
    getUsersAPI, postCreateNewUserAPI, putUpdateUserAPI
};