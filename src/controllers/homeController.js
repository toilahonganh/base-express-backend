const { render } = require('ejs');
const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs');
};

const getUser = (req, res) => {
    res.render('sample.ejs');
};

const postCreateNewUser = (req, res) => {
    let email = req.body.gmail;
    let name = req.body.name;
    let city = req.body.city;

    connection.query(
        `INSERT INTO Users (email, name, city) 
        VALUES (?, ?, ?)`, [email, name, city],
        function (err, results) {
            res.send('Created new user. Congratulations!');
        }
    )
    res.send("Create new user")
};
module.exports = {
    getHomePage, getUser, postCreateNewUser
};