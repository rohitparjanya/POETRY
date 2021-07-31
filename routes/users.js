const express = require('express');
const router = express.Router();
const passport = require('passport');

const usercontroler = require('../controllers/users_controler');

router.get('/sign-in',usercontroler.signIn);
//router.get('/log-In',usercontroler.logIn);

router.post('/create',usercontroler.create);

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), usercontroler.createSession);

module.exports = router;