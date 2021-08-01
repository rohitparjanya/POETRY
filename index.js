const express = require('express');
const cookieparser = require('cookie-parser');
const port = 8000;
const app = express();

const db = require('./config/mongoose');
const session = require('express-session');
const passport= require('passport');
const passportLocal = require('./config/passport-local-stategy');
//const MongoStore = require('connect-mongo')(session);


//middle ware
app.use(express.urlencoded());

app.use(cookieparser());


//for saying app to use static files from here
app.use(express.static('./assets'));




//set up views
app.set('view engine','ejs');
app.set('views','./views');


//mongo store is used to store the session cookie in the db
app.use(session({
    name:'ptod',
    //todo change the secret code
    secret:"helloworld",
    saveUninitialized:false,
    resave:false,
    cookie: {
        maxAge:(1000 *60 * 100)
    },
   
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

//use express router
app.use('/',require('./routes'));

//server listening to this post
app.listen(port,function(err){
    if(err){
        console.log(`error!!!:${err}`);
    }
    console.log(`server is up : ${port}`);
})