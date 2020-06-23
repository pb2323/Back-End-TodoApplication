"use strict";
let express=require("express");
let router=express.Router();
let usercontrollers=require("../../controllers/normalcontrollers/usernormalroutes");

router.get("/users/login",usercontrollers.renderLoginPage);
router.get("/users/register",usercontrollers.renderRegisterPage);

module.exports=router;