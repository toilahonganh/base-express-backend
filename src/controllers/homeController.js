const { render } = require('ejs');
const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs');
    // let users = [];

    // connection.query(
    //     'SELECT * FROM Users u',
    //     function (err, results, fields) {
    //         users = results;
    //         console.log("The result from database here", results);

    //         console.log("Check user", users);

    //         res.send(JSON.stringify(users));
    //     }
    // )

};

const getUser = (req, res) => {
    res.render('sample.ejs');
};
module.exports = {
    getHomePage, getUser
};