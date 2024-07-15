const express = require('express');
const router = express.Router();
const { getHomePage, getUser, postCreateNewUser, getCreatePage, getUpdatePage } = require('../controllers/homeController');
const app = express();

router.get('/', getHomePage);
router.get('/user', getUser);
router.post('/create-new-user', postCreateNewUser);
router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage)


module.exports = router;
