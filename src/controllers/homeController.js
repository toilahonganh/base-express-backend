const { render } = require('ejs');
const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs');
};

const getUser = (req, res) => {
    res.render('sample.ejs');
};

const postCreateNewUser = (req, res) => {
    console.log("req.body", req.body)
    res.send("Create new user")
};
module.exports = {
    getHomePage, getUser, postCreateNewUser
};