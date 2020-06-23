"use strict";
let express=require("express");
let router=express.Router();
let authenticate=require("../../middlewares/authenticate");
let usercontrollers=require("../../controllers/apispecificcontrollers/userapicontrollers");


router.post("/users/login",usercontrollers.loginUser);
router.post("/users/register",usercontrollers.registerUser);
router.post("/users/logout",authenticate,usercontrollers.logoutUser);


module.exports=router;