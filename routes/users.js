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
    {failureRedirect: '/'},
), usercontroler.createSession);

router.get('/profile', passport.checkAuthentication ,usercontroler.profile);

router.get('/sign-out',usercontroler.destroysession);

module.exports = router;