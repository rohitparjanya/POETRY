const User = require("../models/user");
const Post = require('../models/post');

module.exports.signIn = function(req,res){
    return res.render('sign_in',{
    });
}

//create user
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }

    });
}

// sign in and create a session for the user
module.exports.createSession = function(req, res){
    Post.find({},function(err,posts){

        return res.render('wall',{ 
            posts: posts
        });

    })
    
    // Post.find({}).populate('user').exec(function(err,posts){
    //     return res.render('wall',{ 
    //         posts: posts
    //     });
    // })
    
}

//user profile
module.exports.profile = function ( req, res){
    return res.render('profile',{});
}

//destroysession
module.exports.destroysession = function(req,res){
    req.logout();
    return res.redirect('/');
}