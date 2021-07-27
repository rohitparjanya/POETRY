const express = require('express');
const cookieparser = require('cookie-parser');
const port = 8000;
const app = express();

const db = require('./config/mongoose');

//middle ware
app.use(express.urlencoded());

app.use(cookieparser());


//for saying app to use static files from here
app.use(express.static('./assets'));


//use express router
app.use('/',require('./routes'));

//set up views
app.set('view engine','ejs');
app.set('views','./views');

//server listening to this post
app.listen(port,function(err){
    if(err){
        console.log(`error!!!:${err}`);
    }

    console.log(`server is up : ${port}`);
})