const express = require('express');

const router = express.Router();


const homecontroler = require('../controllers/homecontroler');


router.get('/',homecontroler.home);
router.use('/users',require('./users'));
router.use('/posts',require('./posts'));


module.exports = router;