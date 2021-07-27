const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/POETRY_development');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"error in DB"));

db.once('open',function(){
    console.log("hurray!! connected");
});

module.exports = db;