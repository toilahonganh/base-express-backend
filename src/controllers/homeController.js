const { render } = require('ejs');
const User = require('../models/user')
const connection = require('../config/database');
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService');

const getHomePage = async (req, res) => {
    // let results = await getAllUsers();
    let results = [];
    return res.render('home.ejs', { listUsers: results });
};

const getUser = (req, res) => {
    res.render('sample.ejs');
};

const postCreateNewUser = async (req, res) => {
    let email = req.body.gmail;
    let name = req.body.name;
    let city = req.body.city;
    // MONGOOSE QUERRY
    await User.create({
        email: email,
        name: name,
        city: city
    })
    console.log("Create successfully")


    res.send("Create successfully")
};
const getCreatePage = (req, res) => {
    res.render('create.ejs')
}
const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('update.ejs', { userUpdate: user })
}

const postUpdateUser = async (req, res) => {
    let email = req.body.gmail;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;

    await updateUserById(email, name, city, userId);

    res.redirect('/');
};

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('delete.ejs', { userUpdate: user })
}
const postHandleRemoveUser = async (req, res) => {
    const userId = req.body.userId;
    await deleteUserById(userId);

    res.redirect('/');
}
module.exports = {
    getHomePage, getUser, postCreateNewUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser
};