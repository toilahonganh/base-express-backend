const { render } = require('ejs');
const connection = require('../config/database');
const { getAllUsers, getUserById } = require('../services/CRUDService');

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results });
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
const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('update.ejs', { userUpdate: user })
}
module.exports = {
    getHomePage, getUser, postCreateNewUser, getCreatePage, getUpdatePage
};