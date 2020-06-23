"use strict";
let User=require("../models/Users");
module.exports=function(req,res,next){
    if(req.session.userId)
    {
        User.findById(req.session.userId)
        .then(function(user){
            if(!user)
            return res.redirect("/users/login");
            req.user=user;
            next();
        })
        .catch(function(err){
            console.log(err);
            return res.status(500).send("Server error");
        });
    }
    else{
        res.redirect("/users/login");
    }
}