const express = require('express');
const router = express.Router();
const { getHomePage, getUser, postCreateNewUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser } = require('../controllers/homeController');
const app = express();

router.get('/', getHomePage);
router.get('/user', getUser);
router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage)

router.post('/create-new-user', postCreateNewUser);
router.post('/update-user', postUpdateUser)
router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postHandleRemoveUser)





module.exports = router;
