const express = require('express');
const router = express.Router();
const { getHomePage, getUser, postCreateNewUser } = require('../controllers/homeController');
const app = express();

router.get('/', getHomePage);
router.get('/user', getUser);
router.post('/create-new-user', postCreateNewUser);


module.exports = router;
