const { render } = require('ejs');
const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs');
};

const getUser = (req, res) => {
    res.render('sample.ejs');
};

const postCreateNewUser = async (req, res) => {
    let email = req.body.gmail;
    let name = req.body.name;
    let city = req.body.city;

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city],
    );
    console.log("CHECK", results);

    res.send(results)
};
const getCreatePage = (req, res) => {
    res.render('create.ejs')
}
module.exports = {
    getHomePage, getUser, postCreateNewUser, getCreatePage
};