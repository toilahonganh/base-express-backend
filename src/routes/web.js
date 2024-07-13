const express = require('express');
const router = express.Router();
const { getHomePage, getUser } = require('../controllers/homeController');
const app = express();

router.get('/', getHomePage);
router.get('/user', getUser);


module.exports = router;
