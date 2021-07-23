const express = require('express');

const router = express.Router();


const homecontroler = require('../controllers/hoomecontroler');


router.get('/',homecontroler.home);


module.exports = router;