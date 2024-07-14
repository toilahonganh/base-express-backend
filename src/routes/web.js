const express = require('express');
const router = express.Router();
const { getHomePage, getUser, postCreateNewUser, getCreatePage } = require('../controllers/homeController');
const app = express();

router.get('/', getHomePage);
router.get('/user', getUser);
router.post('/create-new-user', postCreateNewUser);
router.get('/create', getCreatePage);



module.exports = router;
