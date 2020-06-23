"use strict";
let User=require("../../models/Users");


module.exports={
    loginUser:function(req,res){
        const{email,password}=req.body;
        User.findByEmailAndPassword(email,password)
        .then(function(user){
            console.log(user);
            req.session.userId=user.id;
            res.redirect("/todos");
        })
        .catch(function(err){
            if(err.message==="Invalid Credentials")
            {
                res.statusCode(401);
                res.redirect("/users/login");
            }
            else
            return res.send(err);
        });
    },
    registerUser:function(req,res){
        let newObj=new User({...req.body});
        newObj.save()
        .then(function(user){
            req.session.userId=user._id;
            return res.redirect("/todos");
        })
        .catch(function(err) {
            console.log(err);
            if (err.name === "ValidationError")
              return res.status(400).send(`Validation Error: ${err.message}`);
          });
    },
    logoutUser:function(req,res){
        req.session.destroy();
        res.redirect("/");
    }
}