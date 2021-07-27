const express = require('express');
const router = express.Router();

const usercontroler = require('../controllers/users_controler');

router.get('/sign-in',usercontroler.signIn);
//router.get('/log-In',usercontroler.logIn);

router.post('/create',usercontroler.create);

module.exports = router;